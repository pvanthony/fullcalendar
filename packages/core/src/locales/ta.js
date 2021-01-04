(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, (global.FullCalendarLocales = global.FullCalendarLocales || {}, global.FullCalendarLocales.ar = factory()));
}(this, (function () { 'use strict';

    var ta = {
        code: "ta",
        week: {
            dow: 1,
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        },
        dir: 'ltr',
        buttonText: {
            prev: "முன்னைய",
            next: "அடுத்த",
            today: "இன்று",
            month: "மாதம்",
            week: "வாரம்",
            day: "நாள்",
            list: "பட்டியல்"
        },
        weekLabel: "வாரம்",
        allDayText: "முழு நாள்",
        eventLimitText: "நிகழ்ச்சி",
        noEventsMessage: "வெற்று"
    };

    return ta;

})));
