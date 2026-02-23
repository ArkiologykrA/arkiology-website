'use client';

import { useState } from 'react';

interface BookingCalendarProps {
  onDateTimeSelect: (date: Date, time: string) => void;
  selectedDate: Date | null;
  selectedTime: string | null;
}

export default function BookingCalendar({ onDateTimeSelect, selectedDate, selectedTime }: BookingCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  // Generate next 60 days of available dates (excluding weekends)
  const getAvailableDates = () => {
    const dates: Date[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    for (let i = 1; i <= 60; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dayOfWeek = date.getDay();
      // Exclude weekends (0 = Sunday, 6 = Saturday)
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        dates.push(date);
      }
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  // Time slots from 9 AM to 5 PM (30-minute intervals)
  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
    '5:00 PM'
  ];

  // Get calendar days for current month view
  const getCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startPadding = firstDay.getDay();
    
    const days: (Date | null)[] = [];
    
    // Add padding for days before first of month
    for (let i = 0; i < startPadding; i++) {
      days.push(null);
    }
    
    // Add days of month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  };

  const isDateAvailable = (date: Date | null) => {
    if (!date) return false;
    return availableDates.some(d => 
      d.getDate() === date.getDate() && 
      d.getMonth() === date.getMonth() && 
      d.getFullYear() === date.getFullYear()
    );
  };

  const isDateSelected = (date: Date | null) => {
    if (!date || !selectedDate) return false;
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const calendarDays = getCalendarDays();

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Calendar */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={prevMonth}
            className="p-2 hover:bg-ark-gray rounded-lg transition-colors"
            aria-label="Previous month"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h3 className="text-lg font-semibold">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h3>
          <button 
            onClick={nextMonth}
            className="p-2 hover:bg-ark-gray rounded-lg transition-colors"
            aria-label="Next month"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center text-sm text-ark-muted py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((date, index) => {
            const available = isDateAvailable(date);
            const selected = isDateSelected(date);
            
            return (
              <button
                key={index}
                disabled={!available}
                onClick={() => date && available && onDateTimeSelect(date, selectedTime || '')}
                className={`
                  aspect-square flex items-center justify-center rounded-lg text-sm transition-all
                  ${!date ? 'invisible' : ''}
                  ${available && !selected ? 'hover:bg-ark-accent hover:text-white cursor-pointer' : ''}
                  ${available && !selected ? 'bg-ark-gray text-ark-white' : ''}
                  ${!available && date ? 'text-ark-muted cursor-not-allowed' : ''}
                  ${selected ? 'bg-ark-accent text-white' : ''}
                `}
              >
                {date?.getDate()}
              </button>
            );
          })}
        </div>

        <p className="text-sm text-ark-muted mt-4">
          <span className="inline-block w-3 h-3 bg-ark-gray rounded mr-2"></span>
          Available dates (weekdays only)
        </p>
      </div>

      {/* Time slots */}
      <div>
        {selectedDate ? (
          <>
            <h3 className="text-lg font-semibold mb-2">
              Select a time
            </h3>
            <p className="text-ark-light mb-6">
              {formatDate(selectedDate)}
            </p>
            <div className="grid grid-cols-2 gap-2 max-h-[400px] overflow-y-auto pr-2">
              {timeSlots.map(time => (
                <button
                  key={time}
                  onClick={() => onDateTimeSelect(selectedDate, time)}
                  className={`
                    py-3 px-4 rounded-lg text-sm font-medium transition-all
                    ${selectedTime === time 
                      ? 'bg-ark-accent text-white' 
                      : 'bg-ark-gray text-ark-white hover:bg-ark-accent hover:text-white'
                    }
                  `}
                >
                  {time}
                </button>
              ))}
            </div>
            <p className="text-sm text-ark-muted mt-4">
              All times are in Eastern Time (ET)
            </p>
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-ark-muted">
            <div className="text-center">
              <svg className="w-12 h-12 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p>Select a date to see available times</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
