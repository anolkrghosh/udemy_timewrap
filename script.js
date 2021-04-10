function start(token,course_id){
    $.ajaxSetup({ headers:{'x-udemy-authorization': 'Bearer '+token} });
    $.post(`https://www.udemy.com/api-2.0/users/me/subscribed-courses/${course_id}/completed-lectures/`,{lecture_id: window.location.href.match(/\d+/)[0], downloaded: false});
}
