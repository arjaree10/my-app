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
                                <img style={{ width: '100%', height: '200px', objectFit: 'cover' }} src="data:image/jpeg;base64,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" alt="Room 1" className="img-fluid rounded" />
                            </div>
                            <div className="col-6">
                                <img style={{ width: '100%', height: '200px', objectFit: 'cover' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7LYaF0DSLdCHaKV8d1rphf-MHU8DNgCY4Rg&s" alt="Room 2" className="img-fluid rounded" />
                            </div>
                            <div className="col-6">
                                <img style={{ width: '100%', height: '200px', objectFit: 'cover' }} src="data:image/jpeg;base64,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" alt="Room 3" className="img-fluid rounded" />
                            </div>
                            <div className="col-6">
                                <img style={{ width: '100%', height: '200px', objectFit: 'cover' }} src="data:image/jpeg;base64,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" alt="Room 4" className="img-fluid rounded" />
                            </div>
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="col-md-6 text-start">
                        <h5 className="fw-bold">ห้องดีลักซ์ ล้านนา</h5>
                        <p>ห้องดีลักซ์ ล้านนา ขนาด 40 ตารางเมตร ห้องพักสไตล์เรียบง่าย มาพร้อมกับอ่างอาบน้ำ ให้คุณได้รับการพักผ่อนที่สุดแสนพิเศษ ไปกับกลิ่นอายความเป็นล้านนา</p>
                        <p>
                            ราคาเริ่มต้น: <span className="text-danger fw-bold">฿1000.00 ต่อคืน</span>
                        </p>
                        <ul className="list-unstyled">
                            <li>📍 วิวภูเขา</li>
                            <li>🏢 84 ตร.ม. | ชั้น 3-7</li>
                            <li>📶 Wi-Fi ฟรี</li>
                            <li>🛁 ห้องน้ำส่วนตัว</li>
                            <li>❄️ เครื่องปรับอากาศ</li>
                            <li>🍽️ รวมอาหารเช้า 2 ที่</li>
                        </ul>
                        <p className="text-muted">ยกเลิกฟรีก่อน 8 ม.ค. 2025 18:00 น.</p>
                         <Link to="/deluxebuy1"  className="btn btn-primary w-100">เลือกห้องพัก</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
