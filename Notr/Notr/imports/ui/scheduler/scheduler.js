import 'dhtmlx-scheduler/codebase/dhtmlxscheduler.js';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler.css';


import './scheduler.html';

Template.scheduler.onRendered(function () {
    let container = this.$(".dhx_cal_container")[0];
    scheduler.init(container, new Date(2017, 2, 16), "week");
});