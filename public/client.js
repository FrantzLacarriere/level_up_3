// fetch all of the courses at /courses
// Add them to the ul.courses as `li`s
// add a link the the details page for a course
// <li><a href='/courses/Ruby'>Ruby</a></li>
$.getJSON('/courses', function(courses){
  var $courses = $('.courses');
  courses.forEach(function(course){
    var template = `<li><a href='/courses/${course}'>${course}</a></li>`
    $courses.append(template);
  })
})
