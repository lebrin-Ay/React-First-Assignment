import React from "react";

function SimpleSite() {
    const image = 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  return (
    <div>
      <html>
        <head>
          <title>My First HTML</title>
        </head>
        <body>

          <header>
            <h1 id="h1">Hi, I'm Ayo</h1>
            <h2 id="h2">a Front-end Web Developer</h2>
          </header>

          <main>
            <p id="reason">The reason why I wanted to become a Web Developer is because
             one has the ability to create ideas and bring it back to life. Also 
             there are tons of options regarding getting a job because this type of job is in 
             high demand. Lastly, one has the ability to become a Specialist in any language.
            </p>

            <p>Website I would like to recreate in the nearest future: <a href="https://www.samsung.com/africa_en/" id="external_link">Samsung</a></p>

            <img src={image} alt="Coding" id="image"/>

            <h3>Services</h3>
            <ol id="ordered">
                <li id="service1">Developing and maintaining the user interface.</li>
                <li id="service2">Implementing design on mobile websites.</li>
                <li id="service3">Using HTML, JavaScript, CSS and other Frameworks to bring concepts to life.</li>
            </ol>

            <h3>Countries</h3>
            <ul id="unordered">
                <li id="country1">Nigeria</li>
                <li id="country2">USA</li>
                <li id="country3">Ireland</li>
            </ul>

            <div>
                <input type="text" id="name" placeholder="Full Name" /> 
                <br/>
                <input type="email" id="email_address" placeholder="Email address" />
                <br/>
                <textarea id="text-area"></textarea>
                <br/>
                <input type="radio" />
                <label for="male" id="radio_male">Male</label>
                <input type="radio" />
                <label for="female" id="radio_female">Female</label>
                <br/>
                <input type="checkbox" id="check-box" />
                <label for="hobbies" id="check-box">CSI Series</label>
                <input type="checkbox" id="check-box" />
                <label for="hobbies" id="check-box">Athletics</label>
                <input type="checkbox" id="check-box" />
                <label for="hobbies" id="check-box">Browsing the Internet</label>
            </div>

            
          </main>

          <footer>
          <button type="submit" id="submit_button">Submit</button>
          </footer>

        </body>
      </html>
    </div>
  );
}

export default SimpleSite;
