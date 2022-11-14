import React from 'react'
import { useNavigate } from 'react-router-dom'
const Enrolled = () => {
    const navigate = useNavigate()
    return (
        <div>
            <header>
                <div className="header-left">
                    <span>
                        <i className='bx bx-book-reader bx-lg'></i>
                    </span>
                    <span>TuteDude</span>
                </div>
                <div className="header-right">
                    <span className="less">My Assignment</span>
                    <span className="less">Chat with Mentor</span>
                    <div className="header-right-sub">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="less">
                            <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z" fill="#800080" />
                        </svg>
                        <div className="profile">
                            <span>ProfileName</span>
                            <i className='bx bx-chevron-down bx-sm'></i>
                        </div>
                    </div>
                </div>
            </header>

            <div className="refer">
                <span>UI/UX <i className='bx bx-chevron-right'></i></span>
                <span> Refer & Earn <i className='bx bx-chevron-right'></i>Friends Referred</span>
            </div>
            <div className="refer goback">
                <i className='bx bx-arrow-back'></i>
                <span onClick={() => navigate(-1)}>go back</span>
            </div>

            <div className="enrolled-refer">
                <div className="refer-flex">
                    <span className="a">Your Referral Code</span>
                    <span className="code-enrolled">edch54</span>
                </div>
                <div className="refer-flex">
                    <span>Wallet Balance</span>
                    <span className="value">$ 500</span>
                </div>
            </div>

            <div className="enrolled-candidate">
                <div className="enrolled-cand-num">
                    <span>Friends who enrolled(3)</span>
                </div>
                <div className="enrolled-users">
                    <div className="enrolled-user">
                        <div className="username">
                            <span className="name">Dhiraj Saxsena</span>
                            <span className="date">14 Sep 2022</span>
                        </div>
                        <div className="courses">
                            <span>Courses Enrolled (6)</span>
                            <div className="course-name">
                                <span>UI/UX</span>
                                <span>Photoshop</span>
                                <span>illustrator</span>
                                <span>Python</span>
                                <span>MERN</span>
                                <span>Java</span>
                            </div>
                        </div>
                        <div className="amount">
                            <span>Referral Amount</span>
                            <span className="amount-value">$185</span>
                        </div>
                    </div>
                    <div className="enrolled-user">
                        <div className="username">
                            <span className="name">Subhash Mishra</span>
                            <span className="date">15 Sep 2022</span>
                        </div>
                        <div className="courses">
                            <span>Courses Enrolled (23)</span>
                            <div className="scroll">
                                <span>UI/UX</span>
                                <span>Photoshop</span>
                                <span>illustrator</span>
                                <span>Python</span>
                                <span>MERN</span>
                                <span>Java</span>
                                <span>c++</span>
                            </div>
                        </div>
                        <div className="amount">
                            <span>Referral Amount</span>
                            <span className="amount-value">$185</span>
                        </div>
                    </div>
                    <div className="enrolled-user">
                        <div className="username">
                            <span className="name">Praful Kumar</span>
                            <span className="date">14 Sep 2022</span>
                        </div>
                        <div className="courses">
                            <span>Courses Enrolled (23)</span>
                            <div className="course-name">
                                <span>UI/UX</span>
                                <span>Photoshop</span>
                                <span>illustrator</span>
                                <span>Python</span>
                                <span>MERN</span>
                                <span>Java</span>
                            </div>
                        </div>
                        <div className="amount">
                            <span>Referral Amount</span>
                            <span className="amount-value">$185</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <span>Terms & Conditions</span>
            </div>
        </div>
    )
}

export default Enrolled
