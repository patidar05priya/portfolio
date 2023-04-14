import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

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
      livedemo: '',
      githurl: 'https://github.com/patidar05priya/portfolio',
      imgUrl: 'assets/images/z26.png',
      tech: 'Angular 15, Firebase'
    },


    {
      id: 3,
      title: 'MoviesDB',
      desc: '',
      livedemo: '',
      githurl: '',
      imgUrl: 'assets/images/z27.png',
      tech: 'Kotlin, MYSQL'
    }
  ]
  about2 = `Hi there! My name is [Your Name], and I am a full stack engineer with over 5 years of experience in cloud telecommunications and education industries.`

  about = "Throughout my career, I have been passionate about leveraging technology to solve real-world problems and improve people's lives. As a full stack engineer, I have had the opportunity to work on a wide range of projects, from developing cloud-based telephony solutions to building scalable and reliable network infrastructures."
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
      'id': '1',
      'from_to_year': '2015 - 2019',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      'info': `Aditya Silver Oak Institute is GTU Affiliated and ranks 7th in Gujurat
Completed B.E in Computer Engineering with 9.54 CGPA.
Won the Best Student Award 3 times for excellent Academic records at College.
Maintained above 9.1 spi in every semester of college academic .`,
      'institution': 'ADITYA SILVER OAK INSTITUTE OF TECHNOLOGY, AHMEDABAD'
    },
    {
      'id': '2',
      'from_to_year': '2013 - 2015',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 78%.`
    },
    {
      'id': '3',
      'from_to_year': '2012 - 2013',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 84%.`
    }
  ];

  exprienceData: any = [
    {
      id: 2,
      company: 'Twilio Inc',
      location: 'Cary, NC',
      timeline: 'Oct 2021 to Feb 2013',
      role: 'Senior Software Developer',
      work: 'Led software development initiative as subject matter expert and primary point-of-contact for project management staff.',
    },
    {
      id: 1,
      company: 'Optanix Inc',
      location: 'Raleigh, NC',
      timeline: 'Oct 2017 - OC 2021',
      role: 'Software Engineer',
      work: 'Create and maintain a multi-host cloud application that enables users to view, manage and repair customer environments from single point of entry Revised, modularized and updated old code bases to modern development standards, reducing operating costs and improving functionality.'
    },


  ]

  extraCircularInfo: any = [
    {
      id:1,
      title: 'Blogger',
      description: '',
      img: 'assets/images/Mehul Kothari – Medium1.png',
      url: 'https://mehulkothari05.medium.com/'
    },
    {
      id:1,
      title: 'Github',
      description: '',
      img: 'assets/images/Mehulkothari_github.png',
      url: 'https://github.com/mehulk05/'
    },
    {
      id:1,
      title: 'Freelancing',
      description: '',
      img: 'assets/images/mehul_freelancing.png',
      url: 'https://www.upwork.com/freelancers/~016d6f497a5629df4b'
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
