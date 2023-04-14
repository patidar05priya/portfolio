import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'SkySpy',
      desc: '',
      livedemo: 'https://skyspy-dc2d3.web.app/',
      githurl: 'https://github.com/patidar05priya/SkySpy',
      imgUrl: 'assets/images/z1.png',
      tech: 'Angular 15, Firebase'
    },

    {
      id: 2,
      title: 'Portfolio',
      desc: '',
      livedemo: 'https://ppatidar-3a1c1.web.app/',
      githurl: 'https://github.com/patidar05priya/portfolio',
      imgUrl: 'assets/images/z26.png',
      tech: 'Angular 15, Firebase'
    },


    {
      id: 3,
      title: 'MoviesDB',
      desc: '',
      livedemo: 'https://github.com/patidar05priya/MoviesDB',
      githurl: 'https://github.com/patidar05priya/MoviesDB',
      imgUrl: 'assets/images/moviesdb.png',
      tech: 'Kotlin, MYSQL'
    },
    {
      id: 3,
      title: 'Simple Portfolio',
      desc: '',
      livedemo: 'https://patidar05priya.github.io/',
      githurl: 'https://github.com/patidar05priya/patidar05priya.github.io',
      imgUrl: 'assets/images/portfoliio1.png',
      tech: 'HTML, JQ'
    }//portfoliio1.png
  ]
  about2 = ""

  about = "Hi there! I'm Priya - a lover of all things tech, books, and fitness - a combination that keeps me sharp, motivated, and ready to take on new challenges As a seasoned full-stack engineer with 5+ years of experience, I'm always striving to craft elegant and efficient web applications. With a passion for learning, I stay up-to-date on the latest industry trends and best practices. When not coding, you can find me out in nature running or playing tennis. My active lifestyle keeps me sharp and focused, making me a well-rounded engineer who can deliver exceptional results"
  resumeurl = "https://drive.google.com/file/d/1SLPNrU_GsVVchnea-J_FCE5ROtgux4ao/view?usp=sharing"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'Java',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'TypeScript',
      'progress': '65%'
    },
    {
      'id': '3',
      'skill': 'Kotlin',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'Python',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'REACT JS',
      'progress': '65%'
    },
    {
      'id': '6',
      'skill': 'Angular',
      'progress': '60%'
    },
    {
      'id': '7',
      'skill': 'JAVASCRIPT JQUERY',
      'progress': '70%'
    },
    {
      'id': '8',
      'skill': 'SQL , MYSQL,FIREBASE',
      'progress': '75%'
    },
  ];


  educationData: any = [
    {
      
    }
  ];

  exprienceData: any = [
    {
      id: 2,
      company: 'Twilio Inc',
      location: 'Cary, NC',
      timeline: 'Oct 2021 to Feb 2013',
      role: 'Senior Software Developer',
      work: ['Technologies : Java, DynamoDB, DrowpWizard, RestAPI, Buildkite, Python, Kotlin, Terraform, AWS, Memcache, Jenkins, Git',
        'Led software development initiative as subject matter expert and primary point-of-contact for project management staff.hhgjh', 
      'Monitored ongoing operation of assigned programs, responded to problems by diagnosing and correcting logic, coding errors and increased success rate by 99.999%',
    "Evaluated project requirements and specifications and developed software applications that surpassed client expectations"],
    },
    {
      id: 1,
      company: 'Optanix Inc',
      location: 'Raleigh, NC',
      timeline: 'Oct 2017 - OC 2021',
      role: 'Software Engineer',
      work: ['Technologies : Java, Servlets, Springbot, Python, Jenkins, JavaScript, JQ, AWS, MYSQL, Docker, Typescript',
        'Create and maintain a multi-host cloud application that enables users to view, manage and repair customer environments from single point of entry Revised, modularized and updated old code bases to modern development standards, reducing operating costs and improving functionality.', 
      'Collaborated on stages of systems development lifecycle from requirement gathering to production releases.',
    'Designed and maintained streamlined, reusable and reliable code for use within distributed cloud environments.'],
    },


  ]

  extraCircularInfo: any = [
    {
     
    },
  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}
