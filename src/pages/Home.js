import React from "react";

function Home() {
    return (
        <div style={{ padding: "10px" }}>
            {/* Text at the top */}
            <div
                style={{
                    textAlign: "center",
                    marginBottom: "40px", // Increased space between title and card
                }}
            >
                <p>ยินดีต้อนรับ</p>
                <h1 style={{ color: "#E89700", fontWeight: "bold" }}>
                    โรงแรมคุ้มภูคำ เชียงใหม่
                </h1>
            </div>

            {/* First Card Section */}
            <div
                className="card mb-3"
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    border: "none", // ปรับเพิ่มที่นี่เพื่อให้ไม่มีเส้นขอบ
                    borderRadius: "8px", // Optional: rounded corners for the card
                    padding: "15px", // Padding for the card content
                    position: "relative", // For positioning the button
                }}
            >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src="https://www.khumphucome.com/assets/uploads/kcfinder/images/about_img(1).jpg"
                            className="img-fluid rounded-start"
                            alt="hotel"
                            style={{
                                width: "100%", // Image takes full width
                                height: "100%", // Full height to match container
                                objectFit: "cover", // Ensures the image covers without stretching
                                borderRadius: "8px", // Adds rounded corners
                            }}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text">
                                ความสุขสมบูรณ์แบบที่พบได้ในโรงแรมคุ้มภูคำเชียงใหม่ ที่ซึ่งความสง่างามสไตล์ล้านนาผสมผสานเข้ากับความซับซ้อนที่ทันสมัย โรงแรมตั้งอยู่รอบ ๆ สถานที่สำคัญหลายแห่ง พร้อมด้วยห้องประชุมไม้สักทอง ห้องพักหรูหรา 180 ห้องและสถานที่จัดการประชุม 9 แห่ง ที่พร้อมตอบสนองทุกความต้องการของคุณ
                            </p>
                            <ul style={{ textAlign: "left", fontSize: 15 }}> {/* Align text to the left */}
                                <p><strong>จุดเด่น</strong></p>
                                <li>ตั้งอยู่ใกล้กับดอยสุเทพและสนามบิน</li>
                                <li>ห้องพักกว้างขวาง 180 ห้องพร้อมห้องพัก 7 ประเภทที่แตกต่างกันสำหรับนักเดินทางเพื่อธุรกิจและพักผ่อน</li>
                                <li>ห้องบอลรูม 2 ห้อง และห้องประชุมขนาดใหญ่</li>
                                <li>ห้องจัดงานและห้องประชุม 7 ห้อง</li>
                                <li>บริการร้านอาหารและคาเฟ่</li>
                                <li>สระว่ายน้ำระบบเกลือ</li>
                                <li>ยิมใหม่</li>
                                <li>แผนกต้อนรับบริการ 24 ชั่วโมง</li>
                                <li>รับส่งสนามบิน</li>
                                <li>ฟรี Wi-Fi สาธารณะ</li>
                                <li>ที่จอดรถฟรี</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div
                style={{
                    backgroundColor: "#f5f5f5", // สีพื้นหลังเทาอ่อนรอบ ๆ การ์ด
                    padding: "20px", // เพิ่มระยะห่างระหว่างขอบของหน้าจอและการ์ด
                }}
            >
                <div
                    className="card mb-3"
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        border: "2px solid #ddd", // Add border to the card
                        borderRadius: "8px", // Optional: rounded corners for the card
                        marginTop: "20px", // Adds space between the two cards
                        padding: "15px", // Padding for the card content
                        position: "relative", // For positioning the button
                        backgroundColor: "white", // สีพื้นหลังการ์ดเป็นสีขาว
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Adding shadow effect to the card
                    }}
                >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/609876468.jpg?k=5cdb9a0be8688fd694cbcc6295324aec6d5c61cb9308d6eca19ccb76486c1f2d&o=&hp=1"
                                className="img-fluid rounded-start"
                                alt="hotel"
                                style={{
                                    width: "100%", // Image takes full width
                                    height: "100%", // Full height to match container
                                    objectFit: "cover", // Ensures the image covers without stretching
                                    borderRadius: "10px", // Adds rounded corners
                                }}
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 style={{ color: "#E89700", textAlign: "left" }}>ห้องว่าง</h1> {/* Left-align the title */}
                                <p className="card-text">
                                    เพลิดเพลินไปกับความโอ่อ่ากว้างขวางของห้องพักที่ตกแต่งอย่างทันสมัย ห้องพักของเรามีจำนวนถึง 180 ห้อง รองรับนักเดินทางทุกประเภท คุณสามารถหาห้องพักที่เหมาะสมกับความต้องการของคุณ
                                </p>

                                <ul style={{ textAlign: "left", fontSize: 15 }}> {/* Align text to the left */}
                                    <li>180 ห้อง (32-84 ตารางเมตร)</li>
                                    <li>5 ประเภทห้องพักที่ดีไซน์การตกแต่งแตกต่างกัน</li>
                                    <li>ห้องพักสำหรับครอบครัวแบบ 2 ห้องนอน</li>
                                    <li>พื้นห้องพักเป็นไม้เนื้อแข็งทั้งหมด</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Button to view all rooms - positioned at bottom-right */}
                    <button
                        style={{
                            position: "absolute",  // Absolute positioning relative to card
                            bottom: "15px",        // Distance from the bottom of the card
                            right: "15px",         // Distance from the right of the card
                            padding: "10px 20px",
                            backgroundColor: "#E89700",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            fontWeight: "bold",
                        }}
                    >
                        ดูห้องพักทั้งหมด
                    </button>
                </div>
            </div>

            <div
                style={{
                    backgroundColor: "#FFFF", // สีพื้นหลังเทาอ่อนรอบ ๆ การ์ด
                    padding: "20px", // เพิ่มระยะห่างระหว่างขอบของหน้าจอและการ์ด
                }}
            >
                <div
                    className="card mb-3"
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        border: "2px solid #ddd", // Add border to the card
                        borderRadius: "8px", // Optional: rounded corners for the card
                        marginTop: "20px", // Adds space between the two cards
                        padding: "15px", // Padding for the card content
                        position: "relative", // For positioning the button and title
                        backgroundColor: "white", // สีพื้นหลังการ์ดเป็นสีขาว
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Adding shadow effect to the card
                    }}
                >
                    {/* Title "รีวิว" */}
                    <h1
                        style={{
                            color: "#E89700",
                            position: "absolute", // Absolute positioning
                            top: "15px", // Top position (distance from the top of the card)
                            left: "15px", // Left position (distance from the left of the card)
                            fontSize: "24px", // Adjust font size as needed
                        }}
                    >
                        รีวิว
                    </h1>

                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src="https://www.matichon.co.th/wp-content/uploads/2017/07/14437885621443788587l.jpg"
                                className="img-fluid rounded-start"
                                alt="hotel"
                                style={{
                                    width: '100px',        // ขนาดของโลโก้
                                    height: '100px',       // ขนาดสูงของโลโก้
                                    borderRadius: '50%',   // ทำให้รูปเป็นวงกลม
                                    objectFit: 'cover'     // ทำให้รูปภาพไม่บิดเบี้ยวและครอบพื้นที่เต็ม
                                }}
                            />
                        </div>

                        <div className="col-md-4">
                            <div className="card-body">
                                <p className="card-text" style={{ textAlign: "left", fontSize: 15 }}>
                                    นนท์ชัย ไทยตัน
                                </p>
                            </div>
                            <div className="card-body">
                                <p className="card-text" style={{ textAlign: "left", fontSize: 15 }}>
                                    บริการดีเยี่ยม!!
                                </p>
                            </div>
                            <div className="card-body">
                                <p className="card-text" style={{ textAlign: "left", fontSize: 15 }}>
                                    คะแนน ✮✮✮✮✩
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <img
                                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/25162274.jpg?k=556c99269c71bd16931d1422b672d28e9824f31da45bcb6c7ff6d6cc987881ea&o=&hp=1"
                                className="img-fluid rounded-start"
                                alt="hotel"
                                style={{
                                    width: '150px',        // ขนาดของโลโก้
                                    height: '150px',       // ขนาดสูงของโลโก้
                                    objectFit: 'cover'     // ทำให้รูปภาพไม่บิดเบี้ยวและครอบพื้นที่เต็ม
                                }}
                            />
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src="https://www.matichon.co.th/wp-content/uploads/2017/07/14437885621443788587l.jpg"
                                className="img-fluid rounded-start"
                                alt="hotel"
                                style={{
                                    width: '100px',        // ขนาดของโลโก้
                                    height: '100px',       // ขนาดสูงของโลโก้
                                    borderRadius: '50%',   // ทำให้รูปเป็นวงกลม
                                    objectFit: 'cover'     // ทำให้รูปภาพไม่บิดเบี้ยวและครอบพื้นที่เต็ม
                                }}
                            />
                        </div>

                        <div className="col-md-4">
                            <div className="card-body">
                                <p className="card-text" style={{ textAlign: "left", fontSize: 15 }}>
                                    นนท์ชัย ไทยตัน
                                </p>
                            </div>
                            <div className="card-body">
                                <p className="card-text" style={{ textAlign: "left", fontSize: 15 }}>
                                    บริการดีเยี่ยม!!
                                </p>
                            </div>
                            <div className="card-body">
                                <p className="card-text" style={{ textAlign: "left", fontSize: 15 }}>
                                    คะแนน ✮✮✮✮✩
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <img
                                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/25162274.jpg?k=556c99269c71bd16931d1422b672d28e9824f31da45bcb6c7ff6d6cc987881ea&o=&hp=1"
                                className="img-fluid rounded-start"
                                alt="hotel"
                                style={{
                                    width: '150px',        // ขนาดของโลโก้
                                    height: '150px',       // ขนาดสูงของโลโก้
                                    objectFit: 'cover'     // ทำให้รูปภาพไม่บิดเบี้ยวและครอบพื้นที่เต็ม
                                }}
                            />
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src="https://www.matichon.co.th/wp-content/uploads/2017/07/14437885621443788587l.jpg"
                                className="img-fluid rounded-start"
                                alt="hotel"
                                style={{
                                    width: '100px',        // ขนาดของโลโก้
                                    height: '100px',       // ขนาดสูงของโลโก้
                                    borderRadius: '50%',   // ทำให้รูปเป็นวงกลม
                                    objectFit: 'cover'     // ทำให้รูปภาพไม่บิดเบี้ยวและครอบพื้นที่เต็ม
                                }}
                            />
                        </div>

                        <div className="col-md-4">
                            <div className="card-body">
                                <p className="card-text" style={{ textAlign: "left", fontSize: 15 }}>
                                    นนท์ชัย ไทยตัน
                                </p>
                            </div>
                            <div className="card-body">
                                <p className="card-text" style={{ textAlign: "left", fontSize: 15 }}>
                                    บริการดีเยี่ยม!!
                                </p>
                            </div>
                            <div className="card-body">
                                <p className="card-text" style={{ textAlign: "left", fontSize: 15 }}>
                                    คะแนน ✮✮✮✮✩
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <img
                                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/25162274.jpg?k=556c99269c71bd16931d1422b672d28e9824f31da45bcb6c7ff6d6cc987881ea&o=&hp=1"
                                className="img-fluid rounded-start"
                                alt="hotel"
                                style={{
                                    width: '150px',        // ขนาดของโลโก้
                                    height: '150px',       // ขนาดสูงของโลโก้
                                    objectFit: 'cover'     // ทำให้รูปภาพไม่บิดเบี้ยวและครอบพื้นที่เต็ม
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default Home;
