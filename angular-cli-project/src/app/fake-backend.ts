import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: Http,
  useFactory: (backend, options) => {
    // configure fake backend
    backend.connections.subscribe((connection: MockConnection) => {

      function getElementByLessonID(objArray, a): any[] {
        return objArray.filter(function( obj ) {return (obj.lesson.toString() === a.toString());});
      }

      let teacherUser = { email: 'teacher@gmail.com', pass: 't', name: 'Techer Cheater', role: 1, picture: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/b666f811889067.562541eff3013.png' };
      let studentUser = { email: 'student@gmail.com', pass: 's', name: 'Student Imprudent', role: 0, picture: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/b666f811889067.562541eff3013.png'};

      let lesson1 = { IDLesson: 0, title: "Lesson 1: Introduction to Web", description: 'This is a nice description about this lesson.', date: new Date("October 13, 2016 11:30:00"), user: teacherUser, image: '' };
      let lesson2 = { IDLesson: 1, title: "Examples", description: 'This is a nice description about this lesson.', date: new Date("November 5, 2016 12:30:00"), user: teacherUser, image: '' };
      let lesson3 = { IDLesson: 2, title: "Project configuration", description: 'This is a nice description about this lesson.', date: new Date("October 22, 2016 17:45:00"), user: teacherUser, image: '' };
      let lesson4 = { IDLesson: 3, title: "Lesson 3: New technologies", description: 'This is a nice description about this lesson.', date: new Date("November 1, 2016 11:30:00"), user: teacherUser, image: '' };
      let lesson5 = { IDLesson: 4, title: "Lesson 2: Database integration", description: 'This is a nice description about this lesson.', date: new Date("October 15, 2016 13:00:00"), user: teacherUser, image: '' };

      let lessons = [lesson1, lesson2, lesson3, lesson4, lesson5];

      let comments1 = [
        {user: teacherUser, message: "This is comment 1 of entry 1 of forum of lesson 1"},
        {user: studentUser, message: "This is comment 2 of entry 1 of forum of lesson 1"},
        {user: teacherUser, message: "This is comment 3 of entry 1 of forum of lesson 1"},
      ];

      let comments2 = [
        {user: studentUser, message: "This is comment 1 of entry 2 of forum of lesson 1"},
        {user: studentUser, message: "This is comment 2 of entry 2 of forum of lesson 1"},
      ];

      let comments3 = [
        {user: studentUser, message: "This is comment 1 of entry 3 of forum of lesson 1"},
        {user: studentUser, message: "This is comment 2 of entry 3 of forum of lesson 1"},
        {user: teacherUser, message: "This is comment 3 of entry 3 of forum of lesson 1"},
        {user: teacherUser, message: "This is comment 4 of entry 3 of forum of lesson 1"},
        {user: studentUser, message: "This is comment 5 of entry 3 of forum of lesson 1"},
      ];

      let comments4 = [
        {user: studentUser, message: "This is comment 1 of entry 4 of forum of lesson 1"},
        {user: studentUser, message: "This is comment 2 of entry 4 of forum of lesson 1"},
        {user: studentUser, message: "This is comment 3 of entry 4 of forum of lesson 1"},
      ];

      let comments5 = [
        {user: studentUser, message: "This is comment 1 of entry 1 of forum of lesson 2"},
      ];

      let comments6 = [
        {user: teacherUser, message: "This is comment 1 of entry 2 of forum of lesson 2"},
        {user: teacherUser, message: "This is comment 2 of entry 2 of forum of lesson 2"},
        {user: teacherUser, message: "This is comment 3 of entry 2 of forum of lesson 2"},
        {user: studentUser, message: "This is comment 4 of entry 2 of forum of lesson 2"},
      ];

      let comments7 = [
        {user: teacherUser, message: "This is comment 1 of entry 3 of forum of lesson 2"},
        {user: teacherUser, message: "This is comment 2 of entry 3 of forum of lesson 2"},
        {user: studentUser, message: "This is comment 3 of entry 3 of forum of lesson 2"},
      ];

      let comments8 = [
        {user: studentUser, message: "This is comment 1 of entry 1 of forum of lesson 3"},
        {user: teacherUser, message: "This is comment 2 of entry 1 of forum of lesson 3"},
        {user: studentUser, message: "This is comment 3 of entry 1 of forum of lesson 3"},
      ];

      let comments9 = [
        {user: teacherUser, message: "This is comment 1 of entry 2 of forum of lesson 3"},
        {user: studentUser, message: "This is comment 2 of entry 2 of forum of lesson 3"},
        {user: studentUser, message: "This is comment 3 of entry 2 of forum of lesson 3"},
      ];

      let comments10 = [
        {user: studentUser, message: "This is comment 1 of entry 3 of forum of lesson 3"},
        {user: studentUser, message: "This is comment 2 of entry 3 of forum of lesson 3"},
        {user: studentUser, message: "This is comment 3 of entry 3 of forum of lesson 3"},
      ];

      let comments11 = [
        {user: teacherUser, message: "This is comment 1 of entry 4 of forum of lesson 3"},
        {user: teacherUser, message: "This is comment 2 of entry 4 of forum of lesson 3"},
        {user: studentUser, message: "This is comment 3 of entry 4 of forum of lesson 3"},
      ];

      let comments12 = [ ];


      let entries1 = [
        { IDEntry: 0, forum: 0, user: studentUser, title: "This is entry 1 of the forum of the lesson 1", comments: comments1 },
        { IDEntry: 1, forum: 0, user: teacherUser, title: "This is entry 2 of the forum of the lesson 1", comments: comments2 },
        { IDEntry: 2, forum: 0, user: studentUser, title: "This is entry 3 of the forum of the lesson 1", comments: comments3 },
        { IDEntry: 3, forum: 0, user: studentUser, title: "This is entry 4 of the forum of the lesson 1", comments: comments4 },
      ];

      let entries2 = [
        { IDEntry: 4, forum: 1, user: teacherUser, title: "This is entry 1 of the forum of the lesson 2", comments: comments5 },
        { IDEntry: 5, forum: 1, user: teacherUser, title: "This is entry 2 of the forum of the lesson 2", comments: comments6 },
        { IDEntry: 6, forum: 1, user: studentUser, title: "This is entry 3 of the forum of the lesson 2", comments: comments7 },
      ];

      let entries3 = [
        { IDEntry: 7, forum: 2, user: teacherUser, title: "This is entry 1 of the forum of the lesson 3", comments: comments8 },
        { IDEntry: 8, forum: 2, user: studentUser, title: "This is entry 2 of the forum of the lesson 3", comments: comments9 },
        { IDEntry: 9, forum: 2, user: teacherUser, title: "This is entry 3 of the forum of the lesson 3", comments: comments10 },
        { IDEntry: 10, forum: 2, user: studentUser, title: "This is entry 4 of the forum of the lesson 3", comments: comments11 },
      ];

      let entries4 = [
        { IDEntry: 11, forum: 3, user: teacherUser, title: "This is entry 1 of the forum of the lesson 4", comments: comments12 },
      ];

      let forums = [
        { IDForum: 0, lesson: 0, activated: true, entries:  entries1 } ,
        { IDForum: 1, lesson: 1, activated: true, entries:  entries2 },
        { IDForum: 2, lesson: 2, activated: true, entries:  entries3 },
        { IDForum: 3, lesson: 3, activated: true, entries:  entries4 },
        { IDForum: 4, lesson: 4, activated: false, entries: {}       },
      ];



      let files = [
        { IDFile: 1, lesson: 0, source: "fileAPrettyLongName.src" },
        { IDFile: 2, lesson: 0, source: "fileB.src" },
        { IDFile: 3, lesson: 1, source: "fileCPrettyLongName.src" },
        { IDFile: 4, lesson: 3, source: "fileD.src" },
        { IDFile: 5, lesson: 3, source: "fileEPrettyLongName.src" },
        { IDFile: 6, lesson: 4, source: "fileF.src" },
        { IDFile: 6, lesson: 4, source: "fileFPrettyLongName.src" },
        { IDFile: 6, lesson: 4, source: "fileFPrettyLongName.src" },
        { IDFile: 6, lesson: 4, source: "fileF.src" },
        { IDFile: 6, lesson: 4, source: "fileF.src" },
        { IDFile: 6, lesson: 4, source: "fileFPrettyLongName.src" },
        { IDFile: 6, lesson: 4, source: "fileF.src" },
        { IDFile: 6, lesson: 4, source: "fileFPrettyLongName.src" },
        { IDFile: 6, lesson: 4, source: "fileFPrettyLongName.src" },
        { IDFile: 6, lesson: 4, source: "fileF.src" },
        { IDFile: 6, lesson: 4, source: "fileF.src" },
        { IDFile: 6, lesson: 4, source: "fileFPrettyLongName.src" },
        { IDFile: 6, lesson: 4, source: "fileF.src" },
        { IDFile: 6, lesson: 4, source: "fileF.src" },
        { IDFile: 6, lesson: 4, source: "fileFPrettyLongName.src" },
        { IDFile: 6, lesson: 4, source: "fileF.src" },
      ]

      let attenders = [
        { user: teacherUser },
        { user: studentUser },
      ]

      // wrap in timeout to simulate server api call
      setTimeout(() => {

        // FAKE AUTHENTICATE API ENDPOINT
        if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === RequestMethod.Post) {
          // get parameters from post request
          let params = JSON.parse(connection.request.getBody());

          // check user credentials and return fake jwt token if valid
          if (params.email === teacherUser.email && params.pass === teacherUser.pass) {
            connection.mockRespond(new Response(
              new ResponseOptions({ status: 200, body: { token: 'fake-jwt-token-teacher' } })
            ));
          }
          else if (params.email === studentUser.email && params.pass === studentUser.pass){
            connection.mockRespond(new Response(
              new ResponseOptions({ status: 200, body: { token: 'fake-jwt-token-student' } })
            ));
          }
          else {
            connection.mockRespond(new Response(
              new ResponseOptions({ status: 200 })
            ));
          }
        }

        // FAKE LESSONS API ENDPOINT
        if (connection.request.url.endsWith('/api/lessons') && connection.request.method === RequestMethod.Get) {
          // check for fake auth token in header and return lessons if valid, this security is implemented server side
          // in a real application
          if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token-teacher' || 'Bearer fake-jwt-token-student') {
            connection.mockRespond(new Response(
              new ResponseOptions({ status: 200, body: lessons })
            ));
          } else {
            // return 401 not authorised if token is null or invalid
            connection.mockRespond(new Response(
              new ResponseOptions({ status: 401 })
            ));
          }
        }

        // FAKE LESSON-DETAILS API ENDPOINT
        if (connection.request.url.endsWith('lesson-details/', 20) && connection.request.method === RequestMethod.Get) {
          // check for fake auth token in header and return lessons if valid, this security is implemented server side
          // in a real application
          let url = connection.request.url;
          let last = url.substring(url.lastIndexOf("/") + 1, url.length);
          if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token-teacher' || 'Bearer fake-jwt-token-student') {
            connection.mockRespond(new Response(
              new ResponseOptions({ status: 200, body: {forum: getElementByLessonID(forums, last)[0], files: getElementByLessonID(files, last), attenders: attenders} })
            ));
          } else {
            // return 401 not authorised if token is null or invalid
            connection.mockRespond(new Response(
              new ResponseOptions({ status: 401 })
            ));
          }
        }

      }, 500);

    });

    return new Http(backend, options);
  },
  deps: [MockBackend, BaseRequestOptions]
};