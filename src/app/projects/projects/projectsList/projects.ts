export interface Projects {
    id: number;
    title: string;
    description: string;
    technologies: string;
    thumbnailImagePath: string;
  }
  
  export const projects = [
    {
      id: 1,
      title: 'REC',
      description: 'I was the sole developer for Remote Engineer Console as it was made as part of my placement work. REC is an iOS app providing remote access to bureau data for in-the-field operatives. Its features include: in-app messaging system (including sending and receiving attachments) and the possibility to display data as charts.',
      technologies: 'Technologies: Swift, Storyboard, CocoaTouch, CocoaPods MVC, TCP Connections and CoreData.',
      thumbnailImagePath: './assets/images/iosEricc_chartNew.png',
      about: "The single-page application was a coursework where I had to develop a full stack application by myself. For this real estate application, we have the agent and then the normal user. The main features that this project included were to register as an agent, add properties to sell, including photos, manage the properties (Update/Delete), and read the messages from the clients. The normal user could only see the  list of properties and send a message to the relevant agent. The backend server had implemented, authentication method, different roles  and permissions for a different types of users, it had a JSON schema Validation, OpenAPI documentation, JSDoc for code documentation and API's testing. The application allowed as well to search for properties by keywords.", 
      images: ["./assets/images/iosEricc_chartNew.png", ],
      descriptions: ["List of the properties available"], 
    },
    {
      id: 2,
      title: 'Full Stack Application - Real Estate SPA',
      description: `A single page application using React and Ant Design for the frontend and NodeJS and Koa for the backend. The application included authentication methods, different types of users with different types of permissions. OpenAPI documentation for the REST API's, JSDocs for code documentation and Unit Testing.`,
      technologies: 'NodeJS, Koa, React, JavaScript, REST API, Ant Design, MySQL.',
      thumbnailImagePath: './assets/images/spa_propertyList.png',
      about: "The single-page application was a coursework where I had to develop a full stack application by myself. For this real estate application, we have the agent and then the normal user. The main features that this project included were to register as an agent, add properties to sell, including photos, manage the properties (Update/Delete), and read the messages from the clients. The normal user could only see the  list of properties and send a message to the relevant agent. The backend server had implemented, authentication method, different roles  and permissions for a different types of users, it had a JSON schema Validation, OpenAPI documentation, JSDoc for code documentation and API's testing. The application allowed as well to search for properties by keywords.", 
      images: ["./assets/images/iosEricc_chartNew.png", ],
      descriptions: ["List of the properties available"], 
    },
    {
      id: 3,
      title: 'ECON',
      description: 'ECON is a multi-platform touchscreen desktop application that manages all the mechanical systems for a retail shop. This application was made on request for a big international retailer. I worked as a team with another software developer and our project manager using Agile methodology. Its features include: creating posts, realtime messaging and a responsive search system.',
      technologies: 'Technologies: Java, JavaFX, Scene Builder, TCP Connections.',
      thumbnailImagePath: './assets/images/econ_mainDasboard.png',
      about: "The single-page application was a coursework where I had to develop a full stack application by myself. For this real estate application, we have the agent and then the normal user. The main features that this project included were to register as an agent, add properties to sell, including photos, manage the properties (Update/Delete), and read the messages from the clients. The normal user could only see the  list of properties and send a message to the relevant agent. The backend server had implemented, authentication method, different roles  and permissions for a different types of users, it had a JSON schema Validation, OpenAPI documentation, JSDoc for code documentation and API's testing. The application allowed as well to search for properties by keywords.", 
      images: ["./assets/images/iosEricc_chartNew.png", ],
      descriptions: ["List of the properties available"], 
    }
  ];