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

  about = "Hello, my name is Priya and I am a well-rounded and passionate full-stack engineer. I have a deep love for technology, books, and fitness, which fuels my motivation and helps me tackle new challenges with confidence. \nAs a seasoned engineer with over 5 years of experience, I am committed to crafting elegant and efficient web applications that meet the needs of my clients. My dedication to learning and staying up-to-date with the latest industry trends and best practices ensures that I always deliver high-quality results. \nOutside of work, I enjoy staying active and engaged with the world around me. Whether I'm out in nature running or playing tennis, my active lifestyle keeps me sharp and focused. This well-rounded approach to life is reflected in my work as an engineer, where I am able to draw on a wide range of skills and experiences to tackle any challenge that comes my way. \nThank you for taking the time to visit my portfolio. Do not hesitate to contact me if you believe that I could be a valuable asset to your esteemed organization."

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
      'skill': 'JAVASCRIPT, JQUERY',
      'progress': '70%'
    },
    {
      'id': '8',
      'skill': 'SQL , MYSQL, FIREBASE',
      'progress': '75%'
    },
    {
      'id': '9',
      'skill': 'DynamoDB, Memcache',
      'progress': '75%'
    },
    {
      'id': '10',
      'skill': 'AWS - Lamda, Glue, S3',
      'progress': '65%'
    },
    {
      'id': '11',
      'skill': 'API Design and Development',
      'progress': '85%'
    },
    {
      'id': '12',
      'skill': 'Spring Boot, Dropwizard, Servlets',
      'progress': '85%'
    },
    {
      'id': '12',
      'skill': 'Software Testing and Validation',
      'progress': '85%'
    }
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
