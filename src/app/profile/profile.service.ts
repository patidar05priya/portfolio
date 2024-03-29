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

  interests: any = [
   {
     id: 1,
     title: 'Medium Article Writing and Personal Projects',
     desc: 'I write on Medium about key learnings from technical books and progress on my personal projects, sharing insights and experiences in tech.',
     mediumUrl: 'https://medium.com/@patidar05priya',
     imgUrl: 'assets/images/interests_1.png',
     topics: 'Technology, Personal Development, Project Development'
   }
  ]
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

  about = "Hello, my name is Priya and I am a well-rounded and passionate full-stack engineer. I am a highly motivated and results-driven individual with a passion for using technology to solve complex problems. As an experienced software developer, I have a proven track record of delivering high-quality software solutions that meet or exceed client expectations. My technical expertise includes proficiency in various programming languages and technologies, including Java, Python, SQL, and AWS. I am a quick learner and always eager to stay up-to-date with the latest developments in the tech industry. In addition to my technical skills, I possess excellent communication and teamwork abilities, enabling me to work effectively with colleagues and clients from diverse backgrounds. I am always willing to take on new challenges and thrive in fast-paced, dynamic environments. If you are looking for a talented software developer who can deliver exceptional results, please don't hesitate to get in touch with me. I am excited about the opportunity to collaborate and make a positive impact. \nThank you for taking the time to visit my portfolio. Do not hesitate to contact me if you believe that I could be a valuable asset to your esteemed organization."

  resumeurl = "https://drive.google.com/file/d/18gSWHOhi1-VgppMNj2_J5zrmqSo6JhJp/view?usp=sharing"

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
      'skill': 'Docker',
      'progress': '65%'
    },
    {
         'id': '6',
         'skill': 'Kubernetes',
         'progress': '60%'
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
      'skill': 'AWS - Lamda, Glue, S3, OpenSearch, API Gateways, Cloudwatch, ',
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
        id: 3,
        company: 'Vonage',
        location: 'Cary, NC',
        timeline: 'Feb 2013-Current',
        role: 'Senior Software Developer',
        work: ['Technologies : Java, Angular, SpringBoot, RestAPI, Terraform, AWS, Jenkins, Git, Kubernetes, Docker',
          'Led software development initiative as subject matter expert and primary point-of-contact for project management staff.hhgjh',
        'Monitored ongoing operation of assigned programs, responded to problems by diagnosing and correcting logic, coding errors and increased success rate by 99.999%',
      "Evaluated project requirements and specifications and developed software applications that surpassed client expectations"],
      },
    {
      id: 2,
      company: 'Twilio Inc',
      location: 'Cary, NC',
      timeline: 'Oct 2021 to Feb 2013',
      role: 'Senior Software Developer',
      work: ['Technologies : Java, DynamoDB, DrowpWizard, RestAPI, Buildkite, Python, Kotlin, Terraform, AWS, Memcache, Jenkins, Git',
        'On-boarding new tools and technologies during development to elevate project quality and shorten timeframes',
      'Reviewed code base and worked with development teams to correct problems, run test scenarios and prepare for deployment.',
    'Revised, modularized and updated old code bases to modern development standards, reducing operating costs and improving functionality'],
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

  getInterests(): Observable<any> {
      return this.interests;
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
