import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // import useNavigate
import Swal from 'sweetalert2';  // เพิ่มการนำเข้า

const ContactPage = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const navigate = useNavigate(); // เรียกใช้ useNavigate

    const handleBack = () => {
        // Handle the back action
    };

    const handleConfirm = () => {
        // แสดง SweetAlert2 และหลังจากนั้นเปลี่ยนเส้นทาง
        Swal.fire({
            title: 'ยืนยันการจอง',
            text: 'คุณต้องการยืนยันการจองนี้หรือไม่?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'ยืนยัน',
            cancelButtonText: 'ยกเลิก'
        }).then((result) => {
            if (result.isConfirmed) {
                // ถ้ากดยืนยัน ให้เปลี่ยนเส้นทางไปหน้า my-app
                navigate('/my-app'); // เปลี่ยนเส้นทางไปที่ '/my-app'
            }
        });
    };

    return (
        <div className="container py-5">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h3 className="mb-3 text-start">วันที่เช็คอินและเช็คเอาท์</h3>
                    <div className="d-flex align-items-center">
                        <input
                            type="date"
                            className="form-control me-2 w-25"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                        <span>ถึง</span>
                        <input
                            type="date"
                            className="form-control ms-2 w-25"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>

                    <div className="row mb-4 mt-4 text-start">
                        <div className="col-md-6">
                            <p><strong>จำนวนผู้เข้าพัก</strong></p>
                            <p>ผู้ใหญ่ 2 จำนวน 1 ห้อง</p>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            <img 
                                style={{ width: '500px', height: '200px', objectFit: 'cover' }} 
                                src="data:image/jpeg;base64,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" 
                                alt="Hotel Room"
                            />
                        </div>
                    </div>

                    <h3 className="mb-3">ข้อมูลลูกค้า</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">ชื่อ - นามสกุล ลูกค้า</label>
                                <input type="text" className="form-control" value=""/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">ประเทศ</label>
                                <input type="text" className="form-control" value=""/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">ที่อยู่ลูกค้า</label>
                                <input type="text" className="form-control" value=""/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email ลูกค้า</label>
                                <input type="text" className="form-control" value=""/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">เบอร์โทรลูกค้า</label>
                                <input type="text" className="form-control" value=""/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">การชำระเงิน</label>
                                <select className="form-select" defaultValue="ธนาคารกรุงไทย">
                                    <option value="ธนาคารกรุงไทย">ธนาคารกรุงไทย</option>
                                    <option value="ธนาคารไทยพาณิชย์">ธนาคารไทยพาณิชย์</option>
                                    <option value="ธนาคารกรุงเทพ">ธนาคารกรุงเทพ</option>
                                    <option value="ธนาคารกสิกรไทย">ธนาคารกสิกรไทย</option>
                                    <option value="ธนาคารกรุงศรีอยุธยา">ธนาคารกรุงศรีอยุธยา</option>
                                    <option value="ธนาคารออมสิน">ธนาคารออมสิน</option>
                                    <option value="ธนาคารทหารไทย">ธนาคารทหารไทย</option>
                                    <option value="ธนาคารธนชาต">ธนาคารธนชาต</option>
                                    <option value="ธนาคารเมืองไทย">ธนาคารเมืองไทย</option>
                                    <option value="ธนาคารยูโอบี">ธนาคารยูโอบี</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">เลขบัญชี</label>
                                <input type="text" className="form-control" value=""/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">ราคา</label>
                                <input type="text" className="form-control" value="1000.00 บาท" disabled/>
                            </div>
                        </div>
                    </div>

                    <div className="text-end mt-4">
                        <Link to="/deluxe"><button className="btn btn-danger me-2" onClick={handleBack}>กลับ</button></Link >
                        <button className="btn btn-success" onClick={handleConfirm}>ยืนยัน</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
