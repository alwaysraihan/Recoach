import React from "react";

const Blogs = () => {
  return (
    <div className="my-16 px-5 md:px-[20%]">
      {/* Question-1 */}
      <h1 className="text-4xl mb-3">
        What is the difference between authorization and authentication?
      </h1>
      <p className="text-xl">
        Basically authorization and authentication both are used for security
        purpose. <br />
        In authentication process, security syestem will checked the user
        providing information for identify to access the system. While in
        authorization process, authorities are checked the information of the
        user taht's they provide for accessing the system. The main difference
        between authorization and authentication is that- Authentication is the
        process of verifying user. And authentication is the process what page
        or file a user has access to.
      </p>
      {/* Question-2  */}
      <h1 className="text-4xl mt-5 mb-3">
        Why are you using firebase? What other options do you have to implement
        authentication?
      </h1>
      <p className="text-xl">
        I'm using firebase because of firebase gives backend srvices and
        ready-made ui library for authentication. And it's easy to use. <br />I
        have many more options for implementing authentication in my app. For
        example-
        <ul className="my-1 mx-5 md:mx-10 list-disc ">
          <li>MongoDb</li>
          <li>Auth0</li>
          <li>Amazon Cognito</li>
          <li>Json Web Token</li>
          <li>Okata</li>
        </ul>
        <p>
          We have many alternatives way for authentication. We can use MongoDB
          and other's option for authentication.{" "}
        </p>
      </p>
      {/* Question-3  */}
      <h1 className="text-4xl mt-5 mb-3">
        What other services does firebase provide other than authentication?
      </h1>
      <p className="text-xl">
        Firebase is a big package and it's helps us for devolping our web or
        androiod application. Firebase provides many services. Without
        authentication, the most useful services are- Cloud Storage, Google
        Analytics, Cloud Functions, Predictions, Cloud Messaging etc. Many other
        services are provided by Firebase.
      </p>
    </div>
  );
};

export default Blogs;
