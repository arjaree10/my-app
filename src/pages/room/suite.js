import React from 'react';
import { Link } from 'react-router-dom';
const ContactPage = () => {
    return (
        
        <div className="container">
            
            <div className="container py-5 ">
                <Link to="/standard">
                <button
                    type="button"
                    className="btn btn-outline-warning2 ms-5 w-25"
                    >
                    Standard
                    </button>
                </Link>
                <Link to="/deluxe">
                    <button type="button" className="btn btn-outline-warning2 ms-5 w-25">Deluxe</button>
                </Link>
                <Link to="/suite">
                    <button type="button" className="btn btn-outline-warning2 ms-5 w-25">Suite</button>
                </Link>
            </div>  
            <nav class="navbar navbar-light bg-warning2 text-white">
                <div class="container-fluid d-flex justify-content-center">
                    <a class="navbar-brand text-white fw-bold">Suite</a>
                </div>
            </nav>

            {/* Suite Section */}
            <div className="mb-5 ">

                <div className="card mb-3 shadow p-3 mb-5 bg-body rounded mt-5">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/25162274.jpg?k=556c99269c71bd16931d1422b672d28e9824f31da45bcb6c7ff6d6cc987881ea&o=&hp=1" className="img-fluid rounded-start" alt="Standard Room" />
                        </div>

                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title text-start fw-bold " >ห้องจูเนียร์ สวีท</h5>
                                <p className="card-text text-start">ห้องจูเนียร์ สวีท ตกแต่งด้วยสไตล์ผสมผสานระหว่างล้านนากับโมเดิร์น ทันสมัยด้วยสิ่งอำนวยความสะดวกภายในห้องพัก ให้ความรู้สึกสงบและผ่อนคลายเป็นอย่างดีา</p>
                                <p className="card-text text-start">🏢 60 ตร.ม.</p>
                                <p className="card-text text-start">👤 2 คน</p>
                                <p className="card-text text-start fw-bold text-primary">รายละเอียดห้องพัก</p>
                                <a
                                    href="#"
                                    className="btn btn-primary position-absolute"
                                    style={{ bottom: '10px', right: '10px', fontSize: '25px' }}
                                    >
                                    จองเลย!
                                    </a>
                            </div>
                        </div>

                        
                    </div>
                </div>

                <div className="card mb-3 shadow p-3 mb-5 bg-body rounded mt-5">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/25162274.jpg?k=556c99269c71bd16931d1422b672d28e9824f31da45bcb6c7ff6d6cc987881ea&o=&hp=1" className="img-fluid rounded-start" alt="Standard Room" />
                        </div>

                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title text-start fw-bold " >เอ็กซ์คลูซีฟ สวีท</h5>
                                <p className="card-text text-start">ห้องเอ็กซ์คลูซีฟ สวีท ตั้งอยู่บนหัวมุมชั้นสูงสุดของโรงแรม นอกหน้าต่างคุณจะได้พบกับวิวอันสวยงามของเมืองเชียงใหม่ ท่ามกลางภูเขาที่ล้อมรอบ</p>
                                <p className="card-text text-start">🏢 60 ตร.ม.</p>
                                <p className="card-text text-start">👤 2 คน</p>
                                <p className="card-text text-start fw-bold text-primary">รายละเอียดห้องพัก</p>
                                <a
                                    href="#"
                                    className="btn btn-primary position-absolute"
                                    style={{ bottom: '10px', right: '10px', fontSize: '25px' }}
                                    >
                                    จองเลย!
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="card mb-3 shadow p-3 mb-5 bg-body rounded mt-5">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/25162274.jpg?k=556c99269c71bd16931d1422b672d28e9824f31da45bcb6c7ff6d6cc987881ea&o=&hp=1" className="img-fluid rounded-start" alt="Standard Room" />
                        </div>

                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title text-start fw-bold " >เห้องเพรสซิเดนเชียล สวีท</h5>
                                <p className="card-text text-start">ห้องเพรสซิเดนเชียล สวีท สุดแสนพิเศษ ด้วยขนาดกว้างขวางถึง 84 ตารางเมตร ตกแต่งสไตล์ทันสมัย มีระดับ สำหรับลูกค้าคนสำคัญของทางโรงแรม</p>
                                <p className="card-text text-start">🏢 84 ตร.ม.</p>
                                <p className="card-text text-start">👤 2 คน</p>
                                <p className="card-text text-start fw-bold text-primary">รายละเอียดห้องพัก</p>
                                <a
                                    href="#"
                                    className="btn btn-primary position-absolute"
                                    style={{ bottom: '10px', right: '10px', fontSize: '25px' }}
                                    >
                                    จองเลย!
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
         </div>
    );
};

export default ContactPage;
