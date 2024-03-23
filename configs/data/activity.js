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
                `THAI - SIGAPORE ไปศึกษาที่`,
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
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/singapore_intership/20230917_163407.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/singapore_intership/1696071026813.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/singapore_intership/1695553370431.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/singapore_intership/1695540259545.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/singapore_intership/1695476263487.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/singapore_intership/1695476259794.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/singapore_intership/1695372525165.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/singapore_intership/1695109699001.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/singapore_intership/1695109691963.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/singapore_intership/20230930_112118.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/singapore_intership/20230930_112117.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/singapore_intership/20230930_102226.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/singapore_intership/20230930_084031.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/singapore_intership/20230928_183757.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/singapore_intership/20230928_122859.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/singapore_intership/20230925_122656.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/singapore_intership/20230924_152627.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/singapore_intership/20230924_152603.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/singapore_intership/20230923_175712.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/singapore_intership/20230923_154323.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/singapore_intership/20230923_151133.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/singapore_intership/20230923_141113.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/singapore_intership/20230923_140426.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/singapore_intership/20230919_141024.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/singapore_intership/20230917_184705.jpg`,
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
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/stem_eastern/14322_0.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/stem_eastern/14346_0.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/stem_eastern/14347_0.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/stem_eastern/14354_0.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/stem_eastern/405254647_383430214038955_4119664207799629315_n.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/stem_eastern/405257803_383430127372297_2219115841501877930_n.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/stem_eastern/405257884_383431694038807_2134391742801538844_n.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/stem_eastern/405458237_383430260705617_7540019078915211206_n.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/stem_eastern/405475903_383431730705470_1827349674469712764_n.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/stem_eastern/405478387_383431557372154_1518142345647477613_n.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/stem_eastern/406401373_383431747372135_4020823004484537635_n.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/stem_eastern/S__26927146_0.jpg`,
                    ],
                    details: [
                        `รางวัล ชนะเลิศ มาตรฐานเหรียญทอง
                        การประกวดผลงานสะเต็มศึกษา 
                        (STEM Education)
                        ระดับภาค ภาคตะวันออกและกรุงเทพมหานคร การแข่งขันทักษะวิชาชีพ และทักษะพื้นฐาน งานประชุมวิชาการองค์การนักวิชาชีพในอนาคตแห่งประเทศไทย ปีการศึกษา 2566 ในวันที่ 27-28 พฤศจิกายน 2566`,
                        `สมาชิกทีม`,
                        `1.นายคณกร ไทยประโคน, 
                        2.นายก้องภพ มีเจริญ, 
                        3.นางสาวพรนภัส มานะบุตร, 
                        4.นางสาวประภาภรณ์ ภูผาลี, 
                        5.นายพุฒิกร พัสดุสาร`,
                        `ครูผู้ควบคุมทีม`,
                        `1.นายกิตติธร หนูวงศ์ 
                        2.นางสาวชัชฎาภรณ์ คงงาม 
                        3.นางสาวจุฑามาศ แสงทอง 
                        4.นายจักรกริช แก้ววิจิตร 
                        5.นางชาลิณี ตางาม`
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
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/stem_nation/1707291998641.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/stem_nation/1709135456424.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/stem_nation/1709135456424.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/stem_nation/1709135492850.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/stem_nation/1709135504841.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/stem_nation/1709135507173.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/stem_nation/20240207_082602.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/stem_nation/20240209_113025.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/stem_nation/20240209_113144.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/stem_nation/20240209_113916.jpg`,
                    ],
                    details: [
                        `รางวัล ชนะเลิศ มาตรฐานเหรียญทอง
                        การประกวดผลงานสะเต็มศึกษา 
                        (STEM Education)
                        งานประชุมวิชาการองค์การนักวิชาชีพในอนาคตแห่งประเทศไทย (อวท.) การแข่งขันทักษะวิชาชีพ และทักษะพื้นฐาน ระดับชาติ ประจำปีการศึกษา 2566 วันที่ 5-9 กุมภาพันธ์ 2567 ณ วิทยาลัยเทคนิคสุพรรณบุรี`,
                        `สมาชิกทีม`,
                        `1.นายคณกร ไทยประโคน, 
                        2.นายก้องภพ มีเจริญ, 
                        3.นางสาวพรนภัส มานะบุตร, 
                        4.นางสาวประภาภรณ์ ภูผาลี,
                        5.นายพุฒิกร พัสดุสาร`,
                        `ครูผู้ควบคุมทีม`,
                        `1.นายกิตติธร หนูวงศ์`
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
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/hackathon/429868561_804068758424620_8261061531529023421_n.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/hackathon/431645538_804774461687383_3050808675876870326_n.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/hackathon/431649000_804772961687533_3875841074115045521_n.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/hackathon/431649153_805895021575327_7058158888392083072_n.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/hackathon/431757385_804774385020724_3255356042682989772_n.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/hackathon/431765782_804811211683708_5557906759452288583_n.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/hackathon/431780236_805896154908547_4959247194625144590_n.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/hackathon/431799396_805894598242036_1672384840459424221_n.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/hackathon/431805836_805893194908843_1578762928623427596_n.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/hackathon/1710324116358.jpg`,
                        `https://raw.githubusercontent.com/ImJustNon/portfolio_assets/main/assets/raw/hackathon/1710324139078.jpg`,
                    ],
                    details: [
                        `เนคเทค สวทช. ภายใต้งบประมาณที่ได้รับการสนับสนุนจากเขตนวัตกรรมระเบียงเศรษฐกิจพิเศษภาคตะวันออก (EECi) ในโครงการพัฒนาทักษะด้าน Industrial IoT แบบเข้มข้นสำหรับบุคลากรระดับอาชีวศึกษา จัดการแข่งขัน IoT Hackathon 2024 ซึ่งในปีนี้จัดขึ้นเป็นปีที่ 4 ในโจทย์ Industrial AIoT Applications for Competitive & Smart Manufacturing ระหว่างวันที่ 11 – 13 มีนาคม 2567 ณ เขตนวัตกรรมระเบียงเศรษฐกิจพิเศษภาคตะวันออก (EECi) วังจันทร์วัลเลย์ จ.ระยอง `,
                        `นายปิยวัฒน์ จอมสถาน หัวหน้าโครงการฯจากทีมระบบไซเบอร์– กายภาพ (CPS) กล่าวว่า เมื่อจบการอบรมทุกหลักสูตรแล้ว ทางโครงการฯ ได้จัดให้มีการแข่งขัน IoT HACKATHON 2024 โดยมีนักศึกษา 41 คน และอาจารย์ 8 คน เข้าร่วมทั้งสิ้น 49 คน จาก 6 วิทยาลัยต้นแบบข้างต้นเข้าร่วม เพื่อให้ผู้อบรมเตรียมความพร้อมสำหรับการฝึกปฏิบัติงาน และได้นำความรู้ที่ได้รับจากการอบรมมาประยุกต์ใช้ในการแข่งขัน ทั้งยังได้นำ Soft Skill มาใช้ในการทำงานร่วมกับผู้อื่น และการนำเสนอผลงาน ผู้เข้าร่วมกิจกรรมจะสามารถนำประสบการณ์ที่ได้รับไปปรับใช้ได้ในการเข้าฝึกปฏิบัติงานได้ ซึ่งผู้เข้าร่วมจะได้ทำการแข่งขันโดยมีโจทย์ OEE, Production Monitoring, Power Management, Maintenance, Warehouse Management, Quality Control, การคำนวณหาค่า ERP, การบำรุงรักษา Motor, การทำระบบ ANDON และการทำ Monitoring Room ครั้งนี้มีการเพิ่มโจทย์เกี่ยวกับ Industrial Edge & AI เข้ามาโดยจะมีการใช้งาน Daysie Platform ผู้เข้าแข่งขันต้องจัดการและวิเคราะห์ชุดข้อมูลของโรงงานจริง และนำมาสร้าง Dashboard และ Analytics Report เพื่อนำเสนอแก่คณะกรรมการผู้ทรงคุณวุฒิ`
                    ],
                }
            },
        },
    ],
}