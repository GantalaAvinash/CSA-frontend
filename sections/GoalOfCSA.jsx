import React from 'react';
import { GoalsOfCS } from '../components'

const GoalOfCSA = () => (
  <div className="gpt3__whatgpt3 section__margin" id="GoalOfCSA">
    <div className="gpt3__whatgpt3-feature">
      <GoalsOfCS title="Goal of Association" text="We offer a variety of events, workshops, and guest speaker sessions throughout the year to help students stay informed about the latest developments in cyber security. Our members also have the opportunity to participate in cyber security competitions and hackathons, which provide hands-on experience and the opportunity to apply the skills they have learned." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Protecting the present, securing the future.</h1>
      <p>Securing our future, together</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <GoalsOfCS title="Support Us" text="We are a student-led association and we can only achieve our goals with the support of our peers. Join us today and help make our campus and online communities safer." />
      <GoalsOfCS title="Knowledgebase" text="Our aims to provide valuable resources for cyber security education and skill development to protect against cyber threats, safeguard sensitive information and get a best placement" />
      <GoalsOfCS title="Education" text="Help the students to participate in other collage events to prove their experince which turn help to build confidence" />
    </div>
  </div>
);

export default GoalOfCSA;
