const config = require("../config.js");

module.exports = {
    banner: [
        {
            img: `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/images/activities/thai-singapore_exchange_2.jpg`,
            title: `ได้ทุนไปเรียนเเลกเปลี่ยนที่ Singapore`,
            description: `ณ Institute of Technical Education (ITE) College Central`,
            active: true,
            position: 'top',
            api: {
                img: `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/images/activities/thai-singapore_exchange_2.jpg`,
            },
        },
        {
            img: `assets/images/activity/pjbl1-2.jpg`,
            title: `ได้รับรางวัลชนะเลิศโปรเจค PJBL ระดับปี 1`,
            description: `ชั้น : ปวช.1`,
            active: true,
            position: 'bottom',
            api: {
                img: `${config.app.api.address}/assets/images/activity/pjbl1-2.jpg`,
            },
        },
        {
            img: `assets/images/activity/rover_scout_banner.jpg`,
            title: `เข้าร่วมงานชุมนุมลูกเสือ เนตรนารีวิสามัญอาชีวศึกษา <br> ภาคตะวันออกเเละกรุงเทพมหานคร ครั้งที่ 8`,
            description: `ชั้น : ปวช.1`,
            active: false,
            position: 'bottom',
            api: {
                img: `${config.app.api.address}/assets/images/activity/rover_scout_banner.jpg`,
            },
        },
        {
            img: `assets/images/activity/Picture6.jpg`,
            title: `<strong>เข้าร่วมการเเข่งขันตอบคำถามวิชาการ</strong>`,
            description: `ชั้น : ปวช.1`,
            active: false,
            position: 'top',
            api: {
                img: `${config.app.api.address}/assets/images/activity/Picture6.jpg`,
            },
        }
    ],
    voc_cert: [
        {
            id: 1,
            img: `assets/images/activity/Picture2-crop.jpg`,
            url: `assets/images/activity/Picture2-crop.jpg`,
            title: [
                `เข้าร่วมการอบรมออกเเบบหุ่นยนต์`,
                `(GW Advance Engineering)`,
            ],
            description: [
                `ชั้น : ปวช.1`,
            ],
            api: {
                img: `${config.app.api.address}/assets/images/activity/Picture2-crop.jpg`,
                v2: {
                    name: "robot_design",
                    photos: [
                        "https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/images/activities/Picture2-crop.jpg"
                    ],
                    details: [
                        
                    ],
                }
            },
        },
        {
            id: 2,
            img: `assets/images/activity/Picture3.jpg`,
            url: `assets/images/activity/Picture3.jpg`,
            title: [
                `เข้าร่วมการเเข่งขันตอบคำถามวิชาการ`,
            ],
            description: [
                `ได้รับรางวัลระดับเหรีญทองรองชนะเลิญอันดับที่ 1 `,
                `ชั้น : ปวช.1`,
            ],
            api: {
                img: `${config.app.api.address}/assets/images/activity/Picture3.jpg`,
                v2: {
                    name: "technical_quizz",
                    photos: [
                        "https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/images/activities/Picture3.jpg"
                    ],
                    details: [
                        
                    ],
                }
            },
        },
        {
            id: 3,
            img: `assets/images/activity/Picture1.jpg`,
            url: `assets/images/activity/Picture1.jpg`,
            title: [
                `เข้าร่วมการอบรมการดูเเลรักษาคอมพิวเตอร์ด้วยตัวเอง`,
            ],
            description: [
                `ชั้น : ปวช.1`,
            ],
            api: {
                img: `${config.app.api.address}/assets/images/activity/Picture1.jpg`,
                v2: {
                    name: "computer_maintenance_program",
                    photos: [
                        "https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/images/activities/Picture1.jpg"
                    ],
                    details: [
                        
                    ],
                }
            },
        },
        {
            id: 4,
            img: `assets/images/activity/Picture11.jpg`,
            url: `assets/images/activity/Picture11.jpg`,
            title: [
                `เข้าร่วมการอบรมการเขียนแผนธุรกิจ`,
            ],
            description: [
                `ชั้น : ปวช.1`,
            ],
            api: {
                img: `${config.app.api.address}/assets/images/activity/Picture11.jpg`,
                v2: {
                    name: "business_plan",
                    photos: [
                        "https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/images/activities/Picture11.jpg"
                    ],
                    details: [
                        
                    ],
                }
            },
        },
        {
            id: 5,
            img: `assets/images/activity/Picture9.jpg`,
            url: `assets/images/activity/Picture9.jpg`,
            title: [
                `เข้าร่วมการอบรมภาษาญีปุ่น`,
            ],
            description: [
                `ชั้น : ปวช.1`,
            ],
            api: {
                img: `${config.app.api.address}/assets/images/activity/Picture9.jpg`,
                v2: {
                    name: "japanese_training",
                    photos: [
                        "https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/images/activities/Picture9.jpg"
                    ],
                    details: [
                        
                    ],
                }
            },
        },
        {
            id: 6,
            img: `assets/images/activity/arduino_teaching_assistant-crop.jpg`,
            url: `assets/images/activity/arduino_teaching_assistant-crop.jpg`,
            title: [
                `เป็นพี่เลี้ยงช่วยสอน Arduino`,
                `ให้กับน้องๆที่มาอบรม`,
            ],
            description: [
                `ชั้น : ปวช.1`,
            ],
            api: {
                img: `${config.app.api.address}/assets/images/activity/arduino_teaching_assistant-crop.jpg`,
                v2: {
                    name: "teach_arduino",
                    photos: [
                        "https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/images/activities/arduino_teaching_assistant-crop.jpg"
                    ],
                    details: [
                        
                    ],
                }
            },
        },
        {
            id: 7,
            img: `assets/images/activity/pjbl1-2-crop-crop.jpg`,
            url: `assets/images/activity/pjbl1-2-crop-crop.jpg`,
            title: [
                `รับรางวัลชนะเลิศโปรเจค PJBL ระดับปี 1`,
            ],
            description: [
                `ชั้น : ปวช.1`,
            ],
            api: {
                img: `${config.app.api.address}/assets/images/activity/pjbl1-2-crop-crop.jpg`,
                v2: {
                    name: "pjbl_1",
                    photos: [
                        "https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/images/activities/pjbl1-2-crop-crop.jpg",
                    ],
                    details: [
                        
                    ],
                }
            },
        },
        {
            id: 8,
            img: `assets/images/activity/rover_scout-crop.jpg`,
            url: `assets/images/activity/rover_scout-crop.jpg`,
            title: [
                `เข้าร่วมงานชุมนุมลูกเสือ`,
                `เนตรนารีวิสามัญอาชีวศึกษา`,
                `ภาคตะวันออกเเละกรุงเทพมหานคร ครั้งที่ 8`,
            ],
            description: [
                `ชั้น : ปวช.1`,
            ],
            api: {
                img: `${config.app.api.address}/assets/images/activity/rover_scout-crop.jpg`,
                v2: {
                    name: "rover_scout",
                    photos: [
                        "https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/images/activities/rover_scout-crop.jpg",
                    ],
                    details: [
                        
                    ],
                }
            },
        },
    ],
    // ปวช2
    voc_cert_2: [
        {
            id: 9,
            img: `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/images/activities/thai-singapore_exchange.jpg`,
            url: `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/images/activities/thai-singapore_exchange.jpg`,
            title: [
                `โครงการนักเรียนเเลกเปลี่ยน`,
                `THAI - SIGAPORE ไปศึกษาต่อที่`,
                `Institute of Technical Education (ITE) College Central`
            ],
            description: [
                `ประเทศสิงคโปร์`,
                `ชั้น : ปวช.2`,
            ],
            api: {
                img: `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/images/activities/thai-singapore_exchange.jpg`,
                v2: {
                    name: "singapore_exchange",
                    photos: [
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/images/activities/thai-singapore_exchange.jpg`,
                    ],
                    details: [
                        
                    ],
                }
            },
        },
        {
            id: 10,
            img: `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/images/activities/stem_2.jpg`,
            url: `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/images/activities/stem_2.jpg`,
            title: [
                `ได้รับรางวัลชนะเลิศการประกวด STEM ศึกษา`,
                `ระดับ ปวช. (ภาคตะวันออก)`,
            ],
            description: [
                `ณ วิทยาลัยการอาชีพกบินทร์บุรี (จ.ปราจีนบุรี)`,
                `ชั้น : ปวช.2`,
            ],
            api: {
                img: `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/images/activities/stem_2.jpg`,
                v2: {
                    name: "stem_vovationalcertificate",
                    photos: [
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/images/activities/stem_2.jpg`,
                    ],
                    details: [
                        
                    ],
                }
            },
        },
        {
            id: 11,
            img: `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/images/activities/stem_na.jpg`,
            url: `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/images/activities/stem_na.jpg`,
            title: [
                `ได้รับรางวัลชนะเลิศการประกวด STEM ศึกษา`,
                `ระดับ ปวช. (ชาติ)`,
            ],
            description: [
                `ณ วิทยาลัยเทคนิคสุพรรณบุรี (จ.สุพรรณบุรี)`,
                `ชั้น : ปวช.2`,
            ],
            api: {
                img: `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/images/activities/stem_na.jpg`,
                v2: {
                    name: "stem_vovationalcertificate_na",
                    photos: [
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/images/activities/stem_na.jpg`,
                    ],
                    details: [
                        
                    ],
                }
            },
        },
        {
            id: 11,
            img: `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/images/activities/hackathon.jpg`,
            url: `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/images/activities/hackathon.jpg`,
            title: [
                `ได้เข้าร่วมการเเข่งขัน AIOT Hackathon 2024`,
                `ระดับ ปวช.`,
            ],
            description: [
                `ณ สำนักงานใหญ่ EECi (จ.ระยอง)`,
                `ชั้น : ปวช.2`,
            ],
            api: {
                img: `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/images/activities/hackathon.jpg`,
                v2: {
                    name: "hackathon",
                    photos: [
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/images/activities/hackathon.jpg`,
                    ],
                    details: [
                        
                    ],
                }
            },
        },
    ],
}