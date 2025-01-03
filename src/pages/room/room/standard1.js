import React from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
    return (
        <div className="container my-5">
            <div className="card p-4">
                <div className="row">
                    {/* Image Section */}
                    <div className="col-md-6">
                        <div className="row g-2">
                            <div className="col-6">
                                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/25162274.jpg?k=556c99269c71bd16931d1422b672d28e9824f31da45bcb6c7ff6d6cc987881ea&o=&hp=1" alt="Room 1" className="img-fluid rounded" />
                            </div>
                            <div className="col-6">
                                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/25162274.jpg?k=556c99269c71bd16931d1422b672d28e9824f31da45bcb6c7ff6d6cc987881ea&o=&hp=1" alt="Room 2" className="img-fluid rounded" />
                            </div>
                            <div className="col-6">
                                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/25162274.jpg?k=556c99269c71bd16931d1422b672d28e9824f31da45bcb6c7ff6d6cc987881ea&o=&hp=1" alt="Room 3" className="img-fluid rounded" />
                            </div>
                            <div className="col-6">
                                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/25162274.jpg?k=556c99269c71bd16931d1422b672d28e9824f31da45bcb6c7ff6d6cc987881ea&o=&hp=1" alt="Room 4" className="img-fluid rounded" />
                            </div>
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="col-md-6 text-start">
                        <h5 className="fw-bold">ห้องมาตรฐาน</h5>
                        <p>เตียงคิงไซส์ 1 เตียง (กว้าง 2 ม.) หรือ เตียงเดี่ยว 2 เตียง (กว้าง 1 ม.)</p>
                        <p>
                            ราคาเริ่มต้น: <span className="text-danger fw-bold">฿700.00 ต่อคืน</span>
                        </p>
                        <ul className="list-unstyled">
                            <li>📍 วิวภูเขา</li>
                            <li>🏢 40 ตร.ม. | ชั้น 2-7</li>
                            <li>📶 Wi-Fi ฟรี</li>
                            <li>🛁 ห้องน้ำส่วนตัว</li>
                            <li>❄️ เครื่องปรับอากาศ</li>
                            <li>🍽️ รวมอาหารเช้า 2 ที่</li>
                        </ul>
                        <p className="text-muted">ยกเลิกฟรีก่อน 8 ม.ค. 2025 18:00 น.</p>
                        <button className="btn btn-primary w-100">เลือกห้องพัก</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
