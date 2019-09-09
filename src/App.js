import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './assets/theme/styles.css';
import Section from './components/shared/section';
import Sidebar from './components/sidebar';
import Experiences from './components/experiences';
import Projects from './components/projects';
import Tags from './components/tags';

export default class CV extends Component {
  renderExperiencesSection() {
    if (this.props.experiences) {
      return (<Experiences {...this.props.experiences} />);
    }
    return null;
  }
  renderProjectsSection() {
    if (this.props.projects) {
      return (<Projects {...this.props.projects} />);
    }
    return null;
  }
  renderTags() {
    if (this.props.tags) {
      return (<Tags {...this.props.tags} />);
    }
    return null;
  }
  renderOpenSourcePart() {
    return (<div><p> This website is based off a template which can be found <a href="https://github.com/sbayd/react-cv-template" target="_blank">here.</a></p>© 2019 Blaz Pocrnja. All rights reserved.</div>);
  }
  renderAboutMe() {
    const { icon, sectionTitle, description } = this.props.aboutMe;
    const innerContent = (<div className="summary" dangerouslySetInnerHTML={{ __html: description }} />);
    return (
      <Section
        className="summary-section"
        icon={icon || 'user'}
        title={sectionTitle || 'About Me'}
      >
        {innerContent}
      </Section>
    );
  }

  render() {
    return (
      <div className="wrapper">
        <Sidebar
          {...this.props.profile}
        />
        <div className="main-wrapper">
          {this.renderAboutMe()}
          {this.renderExperiencesSection()}
          {this.renderProjectsSection()}
          {this.renderTags()}
          {this.renderOpenSourcePart()}
        </div>
      </div>
    );
  }
}

CV.propTypes = {
  profile: PropTypes.shape().isRequired,
  aboutMe: PropTypes.shape().isRequired,
  experiences: PropTypes.shape().isRequired,
  projects: PropTypes.shape().isRequired,
  tags: PropTypes.shape().isRequired
};
