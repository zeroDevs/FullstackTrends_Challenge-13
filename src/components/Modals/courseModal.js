import React from 'react';
import './modal.css'
const one = require('../../images/courses/zerotomastery.jpg')
const two = require('../../images/courses/j2s.jpg')
const three = require('../../images/courses/mastering-interviews.jpg')

const CourseModals = () => {
    return (
        <div
            className="modal fade"
            id="courseModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="courseModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header text-center">
                        <h5 className="modal-title">
                            Zero To Mastery
                        </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body row px-5 py-4">
                        <div className="text-justify">
                            <h5 className="text-center courseSubTitle">The Complete Web Developer Courses for 2019</h5>
                            <p className="text-secondary">
                                A complete full-stack web development course, with the latest and most in-demand technologies, for anyone trying to learn web development in 2019.
                            </p>

                            <p className="text-secondary">
                                Learn to code with us, join the community and practice the skills you gained from the course, build up your portfolio by contributing to projects, and become a job ready web developer this year.
                            </p>

                            <h5 className="text-center text-dark">Click any course to get started!</h5>
                        </div>

                        <a href="https://www.udemy.com/the-complete-web-developer-zero-to-mastery/?couponCode=LEVELUPZTM">
                        <div className="courseCard row">
                            <div className="col-sm-12"><h5>The Complete Web Developer: Zero to Mastery</h5></div>
                            <div className="col-sm-4 p-0"><img src={one} className="d-none d-sm-block w-100" alt="Course 1" /></div>
                            <div className="col-sm-8"> 
                                <p>Learn to code and become a web developer in 2018 with HTML5, CSS, Javascript, React, Node.js, Machine Learning & more!</p>
                            </div>
                        </div>
                        </a>

                        <a href="https://www.udemy.com/the-complete-junior-to-senior-web-developer-roadmap/?couponCode=LEVELUPZTM">
                        <div className="courseCard row">
                            <div className="col-sm-12"><h5>Junior to Senior Web Developer Roadmap</h5></div>
                            <div className="col-sm-4 p-0"><img src={two} className="d-none d-sm-block w-100" alt="Course 2" /></div>
                            <div className="col-sm-8"> 
                                <p>This is the tutorial you've been looking for to no longer be a junior developer,
                                level up your skills, and earn a higher salary. This extensive course doesn’t just
                                cover a small portion of the industry.
                                </p>
                            </div>
                        </div>
                        </a>

                        <a href="https://www.udemy.com/master-the-coding-interview-data-structures-algorithms/?couponCode=LEVELUPZTM">
                        <div className="courseCard row">
                            <div className="col-sm-12"><h5>Master the Coding Interview: Data Structures + Algorithms</h5></div>
                            <div className="col-sm-4 p-0"><img src={three} className="d-none d-sm-block w-100" alt="Course 3" /></div>
                            <div className="col-sm-8"> 
                                <p>Using the strategies, lessons, and exercises in this course, you will learn how to land offers
                                from great tech companies like Google, Microsoft, Facebook, Netflix, Amazon and more!</p>
                            </div>
                        </div>
                        </a>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="button-primary" data-dismiss="modal">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CourseModals;
