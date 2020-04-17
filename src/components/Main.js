import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import resume from '../assets/docs/Felix Sargent Resume.pdf'

class Main extends React.Component {
  render() {
    let close = (
      <div
        role="button"
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          {/* <span className="image main">
            <img src={pic01} alt="" />
          </span> */}
          <h2 class="float-lg-right"> Volunteering </h2>
          <h3>
            Chair of the Board @{' '}
            <a class="c2" href="http://electionscience.org">
              Center for Election Science
            </a>
            <br />
            <small>2017 - Current</small>
          </h3>{' '}
          <i>
            A non-profit organization dedicated to improving the we way vote.
          </i>
          <ul>
            <li>Helped modernize the organization's website</li>
            <li>
              Recruit new board members, coordinate strategic donors, and raise
              grants for the organization
            </li>
            <li>
              Wrote{' '}
              <a href="https://www.berkeleyside.com/2019/06/19/opinion-berkeleys-city-councils-switch-to-re-weighted-range-voting-adds-fairness-to-the-system">
                Berkeley's City Council's switch to 're-weighted range voting'
                adds fairness to the system
              </a>{' '}
              (Berkeleyside)
            </li>
          </ul>
          <h3>
            Mentor @{' '}
            <a href="http://www.meetup.com/TheProductGroup/">
              The Product Group
            </a>
            <br />
            <small>2015 - 2017</small>{' '}
          </h3>
          <ul>
            <li>
              {' '}
              Recognized with the{' '}
              <a href="http://www.theproductmentor.com/recognition.html">
                Outstanding Product Mentor Award
              </a>
            </li>
            <li>
              {' '}
              <a href="https://www.youtube.com/watch?v=Lv3ewdddD8g">
                Managing Technical Debt
              </a>{' '}
              (July 17, 2016)
            </li>
            <li>
              {' '}
              <a href="https://www.youtube.com/watch?v=2rNhGUZea2U">
                How to Interview a Product Manager
              </a>{' '}
              (February 7, 2016)
            </li>
            <li>
              {' '}
              <a href="https://www.youtube.com/watch?v=GnQnsDHQGj0">
                Inheriting a Project
              </a>{' '}
              (July 8, 2015)
            </li>
          </ul>
          <h3>
            Founded the{' '}
            <a href="http://codeforsanfrancisco.org/">San Francisco Brigade</a>{' '}
            @ Code for America
            <br />
            <small>2013</small>
          </h3>
          <ul>
            <li>
              {' '}
              Reformed the way{' '}
              <a href="https://sfgov.org/ofe/find-safe-bank-account">
                San Francisco Citizens without bank accounts get access to
                financial services
              </a>
              .
            </li>
            <li>
              {' '}
              Brought the{' '}
              <a href="https://codeforsanfrancisco.org/projects/sf-admin-code/">
                City Administrative Code
              </a>{' '}
              online.
            </li>
          </ul>
          <h2 class="float-lg-right"> Projects </h2>
          <ul class="list-unstyled">
            <li>
              <a href="https://github.com/fsargent/BARTSign">BARTSign</a>&nbsp;-
              Raspberry Pi Based Transit Board
            </li>
            <li class="c5">
              <a class="c2" href="https://github.com/fsargent/Fippi">
                Fippi
              </a>
              &nbsp;- Physical internet radio, and Air Quality Monitor
            </li>
            <li>
              <a href="https://medium.com/@antagonist/my-voice-is-my-passport-verify-me-condo-access-via-twilio-voice-d889b5193646">
                My Voice is My Passport
              </a>
              &nbsp;(eg 1992 movie{' '}
              <a href="https://www.youtube.com/watch?v=-zVgWpVXb64&feature=emb_title">
                Sneakers
              </a>
              ) - Voice Recognition Passwords for Condo Entry
            </li>
          </ul>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <p>
            <a href={resume}>Download my resume (PDF)</a>
          </p>
          {/* <span className="image main">
            <img src={pic02} alt="" />
          </span> */}
          <h3>
            {' '}
            Director of Engineering @{' '}
            <a href="//www.mediamath.com/">MediaMath</a>
            <br /> <small> November 2016 - In Progress </small>{' '}
          </h3>
          <ul>
            <li>
              Managed three teams of engineers supporting our Campaign
              Management product
            </li>
            <li>
              Lead teams with a philosophy of Servant Leadership,{' '}
              <a href="https://www.infoq.com/presentations/agile-2018/">
                "little a" agile
              </a>
              , and fostering a culture of inclusiveness and discourse
            </li>
            <li>Oversaw refurbishment of legacy Perl application</li>
            <li>
              Orchestrated the migration of legacy Perl monolith to Kubernetes,
              revamping our testing and deployment environments, and moving to
              CI/CD
            </li>
            <li>
              Coordinated teams to extract Authentication, Authorization and
              User services into microservice APIs from a legacy Perl monolith.
              Project allowed for the rollout of OAuth2, Multi-Factor
              Authentication, dramatically increasing security and improving UX
            </li>
            <li>
              Managed the Developer Relations team overseeing{' '}
              <a href="https://apidocs.mediamath.com/">API documentation</a>,
              SDK development, customer support and outreach, and API middleware
              infrastructure
            </li>
          </ul>
          <h3>
            {' '}
            VP of Product @ <a href="//www.seamlessdocs.com/">SeamlessDocs</a>
            <br />
            <small> November 2015 - November 2016 </small>{' '}
          </h3>
          <ul>
            <li>
              {' '}
              Led the product team with a philosophy of servant leadership to
              encourage discussion, healthy debate, and clear communication
            </li>
            <li>
              {' '}
              Created product strategy and worked with CEO to set the roadmap to
              replace unreliable legacy systems
            </li>
            <li>
              {' '}
              Re-established trust between engineering and sales teams by
              creating consistent outcomes and stabilizing the platform,
              bringing bugs identified per week down by 90%
            </li>
            <li>
              {' '}
              Developed process for the account management team to triage and
              prioritize customer issues bringing median resolution time down by
              80%, and increasing customer NPS scores by 60%
            </li>
            <li>
              {' '}
              Conducted extensive user research with government officials to
              refine product features and specifications
            </li>
            <li>
              {' '}
              Re-negotiated contractual obligations with customers to reduce
              commitments, and align engineering roadmap with company direction
            </li>
          </ul>
          <h3>
            {' '}
            Sr. Product Manager: <a href="https://bloomberg.com/vault">
              Vault
            </a>{' '}
            @ <a href="//www.bloomberg.com/">Bloomberg</a>
            <br /> <small> October 2014 - November 2015 </small>
          </h3>
          <ul>
            <li>
              {' '}
              Product owner for Bloomberg Vault Surveillance, the communications
              monitoring and auditing tool for the Bloomberg Terminal (MCMP,
              BVTP)
            </li>
            <li>
              {' '}
              Implemented technology and policies to capture communications to
              prevent Market Abuse, Insider Trading, Harassment, and Data Loss
            </li>
            <li>
              {' '}
              Coordinated a team working on the latest and greatest technology
              stack including Scala, Play, Accumulo, &amp; Akka running on a
              Mesos infrastructure
            </li>
            <li>
              {' '}
              Worked with Compliance and Security Officers to ensure the data
              integrity of our clients, and the Bloomberg Terminal
            </li>
          </ul>
          <h3>
            {' '}
            Product Manager: Repose, Autoscale @{' '}
            <a href="https://www.rackspace.com/">Rackspace</a>
            <br />
            <small> August 2011 - October 2014 </small>{' '}
          </h3>
          <ul>
            <li>
              {' '}
              Defined the product strategy, roadmap, user stories, KPIs, and
              priorities
            </li>
            <li> Redefined product strategy to focus on external customers</li>
            <li>
              {' '}
              Enabled agile development, continuous integration, deployment, and
              testing
            </li>
            <li>
              {' '}
              Built the office{' '}
              <a href="https://www.sdtimes.com/link/36702">Kegerator</a>
            </li>
            <li>
              {' '}
              Product owner for <a href="https://openrepose.org/">Repose</a>,
              the API Middleware Platform. Repose handles Authentication
              (Openstack Keystone), Security, Rate Limiting, and Content
              Normalization for nearly all Rackspace APIs
            </li>
            <li>
              {' '}
              Presented{' '}
              <a href="https://www.youtube.com/watch?v=w_l6-MYEb5U">
                Repose, the Openstack API Filter
              </a>{' '}
              at OpenStack 2014
            </li>
            <li>
              {' '}
              Product owner for{' '}
              <a href="http://www.rackspace.com/cloud/auto-scale/">
                Rackspace Autoscale
              </a>
              , an API to dynamically scale cloud infrastructure based on
              monitoring alerts
            </li>
          </ul>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>

          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            I’m Felix Sargent, a Senior Product/Engineering Manager with years
            of experience working on high-throughput platforms at scale. I’ve
            been part of the larger tech community since 2010, and have driven
            industry-wide conversations around flexible product management, API
            design, managing technical debt, and building engineering teams. I
            believe teams work best when they feel safe, and are well equipped
            for their challenging work.
          </p>
          <p>
            My specialties are backend product and engineering management,
            developer tools, infrastructure, containers, and deployment
            pipelines. I’m great at taking existing platforms and scaling them
            up to be more reliable, secure, and performant. I love digging into
            obscure business logic and simplifying workflows. I’ve managed
            Engineering teams and Product teams and lead both with efficiency
            and empathy. If you’re looking for someone who can build and manage
            engineering teams, and create great products, I’m your person.
          </p>
          <h3 dir="ltr">And I’m on the market!</h3>
          <p>
            If you’re looking for experienced talent to grow your company, I’d
            love to chat. Please see the I have a link at the end of this post
            to schedule a time, but first, let me outline some requirements:
          </p>
          <p>
            Location: Remote or in the San Francisco Bay Area
            <br />
            Employment type: Full-time employee
            <br />
            Organization: Engineering or Product
            <br />
          </p>

          <p>
            Some topics I’ll want to discuss with you:
            <br />
            <ul>
              <li>What is the mission of this team?</li>
              <li>Where do you think I can do the most good?</li>
              <li>
                What problems will this team be tackling over the next 6 months?
              </li>
              <li>
                Am I replacing someone on the team or is the team growing?
              </li>
              <li>What is this team most proud of?</li>
              <li>What are the on-call responsibilities of this team?</li>
              <li>What is the diversity of this team?</li>
              <li>What is your interview process like?</li>
              <li>What is your hiring timeline for this position?</li>
            </ul>
          </p>
          <p>
            If you think we’re a match, please{' '}
            <a href="https://calendly.com/felixsargent">
              schedule some time on my calendar
            </a>{' '}
            to talk!
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p>
            <a href="https://calendly.com/felixsargent">
              Book time on my calendar
            </a>
          </p>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://calendly.com/felixsargent"
                className="icon fa-calendar"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/antagonist"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/felixsargent"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/antagonist"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/fsargent" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
