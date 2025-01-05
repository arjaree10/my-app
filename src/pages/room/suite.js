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
                            <img   style={{ width: '500px' }} src="data:image/jpeg;base64,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" className="img-fluid rounded-start" alt="Standard Room" />
                        </div>

                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title text-start fw-bold " >ห้องจูเนียร์ สวีท</h5>
                                <p className="card-text text-start">ห้องจูเนียร์ สวีท ตกแต่งด้วยสไตล์ผสมผสานระหว่างล้านนากับโมเดิร์น ทันสมัยด้วยสิ่งอำนวยความสะดวกภายในห้องพัก ให้ความรู้สึกสงบและผ่อนคลายเป็นอย่างดีา</p>
                                <p className="card-text text-start">🏢 60 ตร.ม.</p>
                                <p className="card-text text-start">👤 2 คน</p>
                                <Link to="/suite1"> <p className="card-text text-start fw-bold text-primary">รายละเอียดห้องพัก</p> </Link>
                                <Link
                                    to="/suitebuy1"
                                    className="btn btn-primary position-absolute"
                                    style={{ bottom: '10px', right: '10px', fontSize: '25px' }}
                                >
                                    จองเลย!
                                </Link>
                            </div>
                        </div>

                        
                    </div>
                </div>

                <div className="card mb-3 shadow p-3 mb-5 bg-body rounded mt-5">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img   style={{ width: '500px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhOzrKw4ZcJEh-A8eT9RjSLDNltajkE9x8hw&s" className="img-fluid rounded-start" alt="Standard Room" />
                        </div>

                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title text-start fw-bold " >เอ็กซ์คลูซีฟ สวีท</h5>
                                <p className="card-text text-start">ห้องเอ็กซ์คลูซีฟ สวีท ตั้งอยู่บนหัวมุมชั้นสูงสุดของโรงแรม นอกหน้าต่างคุณจะได้พบกับวิวอันสวยงามของเมืองเชียงใหม่ ท่ามกลางภูเขาที่ล้อมรอบ</p>
                                <p className="card-text text-start">🏢 60 ตร.ม.</p>
                                <p className="card-text text-start">👤 2 คน</p>
                                <Link to="/suite2"> <p className="card-text text-start fw-bold text-primary">รายละเอียดห้องพัก</p> </Link>
                                <Link
                                    to="/suitebuy2"
                                    className="btn btn-primary position-absolute"
                                    style={{ bottom: '10px', right: '10px', fontSize: '25px' }}
                                >
                                    จองเลย!
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="card mb-3 shadow p-3 mb-5 bg-body rounded mt-5">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img   style={{ width: '500px' }} src="https://imageio.forbes.com/specials-images/imageserve/5cdb058a5218470008b0b00f/Nobu-Ryokan-Malibu/0x0.jpg?format=jpg&height=1009&width=2000" className="img-fluid rounded-start" alt="Standard Room" />
                        </div>

                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title text-start fw-bold " >เห้องเพรสซิเดนเชียล สวีท</h5>
                                <p className="card-text text-start">ห้องเพรสซิเดนเชียล สวีท สุดแสนพิเศษ ด้วยขนาดกว้างขวางถึง 84 ตารางเมตร ตกแต่งสไตล์ทันสมัย มีระดับ สำหรับลูกค้าคนสำคัญของทางโรงแรม</p>
                                <p className="card-text text-start">🏢 84 ตร.ม.</p>
                                <p className="card-text text-start">👤 2 คน</p>
                                <Link to="/suite3"> <p className="card-text text-start fw-bold text-primary">รายละเอียดห้องพัก</p> </Link>
                                <Link
                                    to="/suitebuy3"
                                    className="btn btn-primary position-absolute"
                                    style={{ bottom: '10px', right: '10px', fontSize: '25px' }}
                                >
                                    จองเลย!
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
         </div>
    );
};

export default ContactPage;
