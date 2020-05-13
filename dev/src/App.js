import { profileDescription } from './profileDescription';
import { employmentBlock } from './employmentBlock';
import { educationBlock } from './educationBlock';
import { skillBlock } from './skillBlock';
import React from 'react';
// import logo from './logo.svg';
import square from './square.svg';
import './App.css';

function App() {
  return (
    <div className="app-body">
      <header className="app-header">
        <div className="title-container">
          <h1>
            Guilherme Barbosa Leme
          </h1>
          <h5>
            Front-end Engineer, Product Designer
          </h5>
        </div>
        <div className="header-logo-container">
          <img src={square} className="header-logo"></img>
        </div>
      </header>
      <div className="contact-info-container">
        {/* <div className="contact-info--block">
          <div><b>Address</b></div>
          <div>887 Eça de Queirós Street, 85905-080, Cascavel, Paraná - Brazil</div>
        </div>
        <div className="contact-info--block">
          <div><b>Telefone</b></div>
          <div>+55 45 99931-2339</div>
        </div> */}
        <div className="contact-info--block">
          <div><b>Email</b></div>
          <div>guibleme@gmail.com</div>
        </div>
      </div>
      <div className="resume-parts-container">
        <section className="profile-section-container">
          <h3><span className="section-title">SUMMARY</span></h3>
          {profileDescription([`Energetic front-end engineer and product designer, with 2+ years of full-time experience, from general web apps to ERP softwares. Implemented a design system and design specification workflow at Maxicon Systems.`, `Has been working as a Product designer and system analyst for the last eight months, providing scope definition and requirement specification, with necessary documentation (flowcharts, UML charts), as well as protoyping new products.`, `Freelance as interface designer and user experience consultant since 2018.`])}
        </section>
        <section className="employment-section-container">
          <h3><span className="section-title">EMPLOYMENT HISTORY</span></h3>
          {employmentBlock('Feb 2019 - present', 'Product designer and software developer', ' Maxicon Systems', [
            `Product design (problem benchmarking/brainstorming, solution refinement using design thinking, prototype development and product adherence validation)`,
            'Software analysis and specification (project documents, flow charts, UML Charts)',
            'User interface design (Adobe XD, Figma, Affinity Designer)',
            'User experience analysis (A/B tests, supervised and unsupervised usability surveys)',
            'Prototype development (Adobe XD, Figma)',
            'Front-end engineering (Angular 6 + Node and Java backend + Mongo, PostgreSQL and OracleDB)'])}
          {employmentBlock('Sep 2016 - Jan 2018', 'UI Designer and front-end developer', 'Wing Agency', [
            'User interface design (Adobe Photoshop, Sketch)',
            'User experience analysis (A/B tests, supervised usability surveys)',
            'Prototype development (inDesign, Adobe Photoshop)',
            'User interface development (Angular.Js, Angular 2)',
            'Requirement specification and sprint management (Trello, Jira)'
          ])}
          {employmentBlock('Jul 2014 - Dec 2014', 'Data visualization Internship', `NICTA's (National Information Technology Australia) Inteligent Pipes Project`, [
            '2D data visualization, using Google Maps API',
            'Matlab software development',
            'Data processing and conversion',
          ])}
        </section>
        <section className="education-section-container">
          <h3><span className="section-title">EDUCATION</span></h3>
          {educationBlock('Aug 2010 - Dec 2019', 'BSc. Electronic Engineering, Federal University of Technology – Paraná', 'Toledo, Paraná - Brazil')}
          {educationBlock('Jan 2017 - Dec 2019', 'BTech. System Analysis and Developement, University of Paraná', 'Toledo, Paraná - Brazil')}
          {educationBlock('Aug 2013 - Dec 2014', 'Electrical and Computer Engineering, University of Sydney', 'Sydney, NSW - Australia')}
        </section>
        <section className="skills-section-container">
          <h3><span className="section-title">SKILLS</span></h3>
          <div className="skills-grid-container">
            {skillBlock('Prototyping', 'w90')}
            {skillBlock('Front-end development', 'w80')}
            {skillBlock('Product design/analysis', 'w70')}
            {skillBlock('Project documenting', 'w60')}
          </div>
        </section>
      </div>
    </div>
  );

}

export default App;
