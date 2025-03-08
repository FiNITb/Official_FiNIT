// TeamSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const TeamDetails = {
  secondYear: [
    // Fintech
    {
      id: uuidv4(),
      name: "Ujjwal Kumar",
      year: "2nd Year",
      role: "Fintech",
      linkedIn: "https://www.linkedin.com/in/ujjwal-kumar-8547bb2b5/",
      email: "ujjwalkr.com@gmail.com",
      instagram: "https://www.instagram.com/uk.4289?igsh=bGR4aWN0b3V5dTkx",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1737660118/1735133519974_-_Ujjwal_Kumar_yh6oye.jpg",
    },
    {
      id: uuidv4(),
      name: "Anuj Gour",
      year: "2nd Year",
      role: "FinTech",
      linkedIn: "https://www.linkedin.com/in/anuj-gour-13198a28a",
      email: "anujgour0124@gmail.com",
      instagram: "https://www.instagram.com/anujgour_27/profilec",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1737660122/pixelcut-export_-_Anuj_Gour_ovbibc.png",
    },

    // Event Managers
    {
      id: uuidv4(),
      name: "Yuvraj Singh Gaur",
      year: "2nd Year",
      role: "Event Manager",
      linkedIn: "https://www.linkedin.com/in/gauryuvraj",
      email: "",
      instagram: "https://www.instagram.com/yuvrajsinghgaur",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1740831954/WhatsApp_Image_2025-03-01_at_17.51.05_182c6683_kytudf.jpg",
    },
    {
      id: uuidv4(),
      name: "Nikhil Solanki",
      year: "2nd Year",
      role: "Event Manager",
      linkedIn: "https://www.linkedin.com/in/nikhil-solanki-a7a",
      email: "nikhilsolanki2306@gmail.com",
      instagram: "https://www.instagram.com/_n_i_k_k_23/profilec",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1737660119/IMG-20250102-WA0005_-_Nikhil_Paras_pjmvvi.jpg",
    },
    {
      id: uuidv4(),
      name: "Piyush Yadav",
      year: "2nd Year",
      role: "Event Manager",
      linkedIn: "https://linkedin.com/in/piyushyadav2307",
      email: "yadavpiyush68144@gmail.com",
      instagram: "https://www.instagram.com/piyush_yadav2307",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1737660120/IMG_20250102_204636_-_Piyush_Yadav_cwgtqp.jpg",
    },
    {
      id: uuidv4(),
      name: "Akshat Arora",
      year: "2nd Year",
      role: "Event Manager",
      linkedIn:
        "https://www.linkedin.com/in/akshat-arora-6a21a4290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "akshatarora241@gmail.com",
      instagram: "https://www.instagram.com/",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1737660121/IMG_20250102_212426_-_Akshat_Arora_fleoix.jpg",
    },
    {
      id: uuidv4(),
      name: "Umang Rathod",
      year: "2nd Year",
      role: "Event Manager",
      linkedIn:
        "https://www.linkedin.com/in/umang-rathod-8b16062b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "umangrathod7492@gmail.com",
      instagram: "https://www.instagram.com/umannngggg?igsh=a3NzZnQ5eHAwN2Vi",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1737660121/IMG_20250102_163222_-_UMANG_n2sgib.jpg",
    },
    {
      id: uuidv4(),
      name: "Ankit Singh",
      year: "2nd Year",
      role: "Event Manager",
      linkedIn: "https://www.linkedin.com/in/ankit-singh-78152b1b5/",
      email: "ankit132004singh@gmail.com",
      instagram: "https://www.instagram.com/ankit_shekhawat1326",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1737660118/1708271881166_-_Ankit_Singh_gshwzb.jpg",
    },
    {
      id: uuidv4(),
      name: "Anchal Verma",
      year: "2nd Year",
      role: "Event Manager",
      linkedIn:
        "https://www.linkedin.com/in/anchal-verma-4b5716341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "verma20.09.aashi@gmail.com",
      instagram:
        "https://www.instagram.com/__aashi__20?igsh=MWhwaXp3YzAzZDRvaQ==",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1737660119/aaroha_-_Anchal_Verma_k8lprv.jpg",
    },
    {
      id: uuidv4(),
      name: "Ayush Meena",
      year: "2nd Year",
      role: "Event Manager",
      linkedIn:
        "https://www.linkedin.com/in/ayush-meena-953557285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "meenaayushno1@gmail.com",
      instagram:
        "https://www.instagram.com/ayushmeena_7/profilecard/?igsh=NGdrc2E1Mms2bzRh",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1741436859/IMG_20250207_202725_096_fda2oi.webp",
    },
    
    // Web Developers
    {
      id: uuidv4(),
      name: "Ram Kumar",
      year: "2nd Year",
      role: "Web Developer",
      linkedIn: "https://www.linkedin.com/in/ram-kumar999",
      email: "ramkumar18092005@gmail.com",
      instagram: "https://www.instagram.com/Ram_kumar_9525",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1737660118/1726914369315_-_Ram_Kumar_gvedji.jpg",
    },
    {
      id: uuidv4(),
      name: "Harish Kushwaha",
      year: "2nd Year",
      role: "Web Developer",
      linkedIn: "https://www.linkedin.com/in/harish-kushwaha-3895a428b/",
      email: "h.kush2005@gmail.com",
      instagram: "https://www.instagram.com/harish.k_ush_05/",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1737660120/IMG-20241221-WA0554_-_harish_kushwaha_pqwdgz.jpg",
    },
    
    // Sponsorship Executives
    {
      id: uuidv4(),
      name: "Bhavya Ailani",
      year: "2nd Year",
      role: "Sponsorship executive",
      linkedIn:
        "https://www.linkedin.com/in/bhavya-ailani-0540a223b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "bhavyaailani13@gmail.com",
      instagram:
        "https://www.instagram.com/bhavyaailani_/profilecard/?igsh=MXM1aGdtcXdlOGhmaA==",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1737660122/IMG_20250104_134917_-_Bhavya_Ailani_xli77b.jpg",
    },
    {
      id: uuidv4(),
      name: "Shrijee Gupta",
      year: "2nd Year",
      role: "Sponsorship executive",
      linkedIn: "https://www.linkedin.com/in/shrijee-gupta-565768289/",
      email: "shrijeegupta1703@gmail.com",
      instagram: "https://www.instagram.com/shrijee_264",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1740739674/IMG_20241009_125550_349_-_shrijee_gupta_dhn5iz.webp",
    },
    {
      id: uuidv4(),
      name: "Prakhar Dubey",
      year: "2nd Year",
      role: "Sponsorship Executive",
      linkedIn: "https://www.linkedin.com/in/prakhardubey110",
      email: "prakhardubey110@gmail.com",
      instagram: "https://www.instagram.com/prakhar_110",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1741437166/IMG-20250102-WA0005_-_Nikhil_Paras_pjmvvi.jpg",
    },
    {
      id: uuidv4(),
      name: "Anupam Kumar Tiwari",
      year: "2nd Year",
      role: "Sponsorship Executive",
      linkedIn: "https://www.linkedin.com/in/anupam-kumar-tiwari",
      email: "apriyam2005@gmail.com",
      instagram: "https://www.instagram.com/anupam_nitb/profilec",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1737660122/Photoroom-20241026_151614_-_Anupam_Kumar_Tiwari_rptord.png",
    },
    
    // Designer
    {
      id: uuidv4(),
      name: "Rohan Kumar",
      year: "2nd Year",
      role: "Graphic Desinger",
      linkedIn:
        "https://wwww.linkedin.com/in/rohan-kumar-80862a301ww.linkedin.com/in/",
      email: "rohankk370@gmail.com",
      instagram: "https://www.instagram.com/rohan.kr_3",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1737660119/IMG-20241108-WA0005_1_-_Rohan_Kumar_d64q24.jpg",
    },
    
    // Fintech
    {
      id: uuidv4(),
      name: "Ujjwal Kumar",
      year: "2nd Year",
      role: "Fintech",
      linkedIn: "https://www.linkedin.com/in/ujjwal-kumar-8547bb2b5/",
      email: "ujjwalkr.com@gmail.com",
      instagram: "https://www.instagram.com/uk.4289?igsh=bGR4aWN0b3V5dTkx",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1737660118/1735133519974_-_Ujjwal_Kumar_yh6oye.jpg",
    },
    {
      id: uuidv4(),
      name: "Anuj Gour",
      year: "2nd Year",
      role: "FinTech",
      linkedIn: "https://www.linkedin.com/in/anuj-gour-13198a28a",
      email: "anujgour0124@gmail.com",
      instagram: "https://www.instagram.com/anujgour_27/profilec",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1737660122/pixelcut-export_-_Anuj_Gour_ovbibc.png",
    },
    
    // Photographer
    {
      id: uuidv4(),
      name: "Vaibhav Mandwar",
      year: "2nd Year",
      role: "Photographer",
      linkedIn: "https://www.linkedin.com/in/Vaibhav Mandwar",
      email: "vaibhavmb97@gmail.com",
      instagram: "https://www.instagram.com/waybhav_07",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1737660123/IMG_2299_-_Vaibhav_M_vianuc.jpg",
    },
  ],
  thirdYear: [
    {
      id: uuidv4(),
      name: "Ankita Tyagi",
      year: "3rd Year",
      role: "Mentor",
      linkedIn: "https://www.linkedin.com/in/",
      email: "ankita.tyagi05@gmail.com",
      instagram: "whoankitatyagi",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1741433401/Snapchat-229452271_-_Ankita_Tyagi_jem1ha.jpg",
    },
    {
      id: uuidv4(),
      name: "Rohit Soni",
      year: "3rd Year",
      role: "Mentor",
      linkedIn:
        "https://www.linkedin.com/in/rohit-soni-aab7512b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      email: "rohitsoniofficial2001@gmail.com",
      instagram:
        "https://www.instagram.com/rohit_soni_official2001?igsh=MXVhcWR0MHJtYXltNw%3D%3D&utm_source=qr",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1741433391/IMG_0449_-_Rohit_Soni_ih7xuj.jpg ",
    },
    {
      id: uuidv4(),
      name: "Ayush Gautam",
      year: "3rd Year",
      role: "Coordinator",
      linkedIn: "https://www.linkedin.com/in/ayush-gautam-15731",
      email: "ayushgautam5v@gmail.com",
      instagram: "https://www.instagram.com/",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1741343466/WhatsApp_Image_2025-02-11_at_19.11.44_fac38c6c_wcv93m.jpg",
    },
    {
      id: uuidv4(),
      name: "Shriyansh Chourasiya",
      year: "3rd Year",
      role: "Co-coordinator (Admin)",
      linkedIn: "https://www.linkedin.com/in/shriyansh-chourasiya",
      email: "shriyanshchourasiya96@gmail.com",
      instagram: "https://www.instagram.com/ll_mr.unpredictable_",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1737660481/Taj_photo_-_Shriyansh_Chourasiya_fm8e2a.jpg",
    },
    {
      id: uuidv4(),
      name: "KARAN CHOUDHARY",
      year: "3rd Year",
      role: "Co-Coordinator(Management)",
      linkedIn: "https://www.linkedin.com/in/karan-choudhary-8b62a6216",
      email: "krnchdryoo7@gmail.com",
      instagram: "https://www.instagram.com/aisenh_037/",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1739281135/Karan_FiNIT_lkotka.jpg",
    },
    {
      id: uuidv4(),
      name: "Prachi Agarwal",
      year: "3rd Year",
      role: "General Secretary",
      linkedIn: "https://www.linkedin.com/in/prachi-agarwal-158bbb24b",
      email: "agarwalprachi026@gmail.com",
      instagram: "ag_prachi_",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1741433391/IMG-20250118-WA0049_-_Prachi_Agarwal_mtycv1.jpg",
    },
    {
      id: uuidv4(),
      name: "Pragati Singh",
      year: "3rd Year",
      role: "Event Management Head",
      linkedIn: "https://www.linkedin.com/in/pragati-singh-520888250",
      email: "singhpragati041@gmail.com",
      instagram: "_sinpragati_",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1741433391/IMG-20231125-WA0055_-_Pragati_Singh_llhrna.jpg",
    },
    {
      id: uuidv4(),
      name: "Rishabh Patel",
      year: "3rd Year",
      role: "Operational Head",
      linkedIn: "https://www.linkedin.com/in/rishabh-patel-27bb",
      email: "rishabh558patel@gmail.com",
      instagram: "https://www.instagram.com/risheclipse",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1737660479/IMG_20241122_190630_263_-_Rishabh_patel_zzvrnm.webp",
    },
    {
      id: uuidv4(),
      name: "Arman Pal",
      year: "3rd Year",
      role: "Web Development Head",
      linkedIn: "https://www.linkedin.com/in/arman-pal-867871252",
      email: "armanpal272005@gmail.com",
      instagram: "https://www.instagram.com/",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1739279606/Armaan_sir_FiNIT_bbss9i.jpg",
    },
    {
      id: uuidv4(),
      name: "Dileep Bhargav",
      year: "3rd Year",
      role: "Fintech Head",
      linkedIn: "https://www.linkedin.com/in/dileep-bhargav89/",
      email: "dileepbhargav722@gmail.com",
      instagram:
        "https://www.instagram.com/dileepbz._/profilecard/?igsh=Ync2eDB4bXBxeTJ2",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1741343584/WhatsApp_Image_2025-01-22_at_14.26.12_2400b348_-_Dileep_Bhargav_xh3z86.jpg",
    },
    {
      id: uuidv4(),
      name: "Varun Jain",
      year: "3rd Year",
      role: "Fintech Head",
      linkedIn: "https://www.linkedin.com/in/varun-jain08",
      email: "varunvj8804@gmail.com",
      instagram: "https://www.instagram.com/varun.8_8",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1737660479/IMG_20240330_225228_-_Varun_Jain_ktcvp2.jpg",
    },
    {
      id: uuidv4(),
      name: "Shreyas Raut",
      year: "3rd Year",
      role: "Promotion and outreach head",
      linkedIn:
        "https://www.linkedin.com/in/shreyas-raut-643a9a256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "shreyas.raut04@gmail.com",
      instagram:
        "https://www.instagram.com/shreyasraut99?igsh=MWN4N3NqdWY3ZXdkNA==",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1737660479/IMG_20240402_094341_-_Shreyas_Raut_ybieca.jpg",
    },
    {
      id: uuidv4(),
      name: "Vedant Kumar Namdev",
      year: "3rd Year",
      role: "Content and Designing Head",
      linkedIn: "https://www.linkedin.com/in/vedant-kumar-namdev-31228a257",
      email: "",
      instagram:
        "https://www.instagram.com/vedantknamdev?utm_source=qr&igsh=MWNoNGtoMGwyN3c2Zg==",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1737660479/Clipped_image_20241201_232458_-_Vedant_Namdev_rvgmma.png",
    },
    {
      id: uuidv4(),
      name: "Aditya Singh",
      year: "3rd Year",
      role: "Technical Head",
      linkedIn:
        "https://www.linkedin.com/in/aditya-singh-b788a5343?trk=contact-info",
      email: "ad6425691@gmail.com",
      instagram:
        "https://www.instagram.com/adityasingh1844?igsh=MXVxc2QwNjBpNDYydQ==",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1741433392/IMG_20250127_223223_-_Aditya_Singh_i2p0hk.jpg",
    },
  ],

  facultyCoordinator: [
    {
      id: uuidv4(),
      name: "Dr Nenavath Sreenu",
      year: "",
      role: "Coordinator",
      linkedIn: "https://www.linkedin.com/in/sreenu-n-69b688202/",
      email: " srinunaikphd@gmail.com",
      instagram: "",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1741432348/Dr_Nevnath_Shrinuu_MBA_edjaml.jpg",
    },
    {
      id: uuidv4(),
      name: "Dr. Ashis Kumar Pradhan",
      year: "",
      role: "Co-coordinator",
      linkedIn: "https://www.linkedin.com/in/ashis-kumar-pradhan-26b79040/",
      email: "ashiskumarprdhn@gmail.com",
      instagram: "",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1741432369/Ashis_Kumar_Pradhan_qxbqua.jpg",
    },
    {
      id: uuidv4(),
      name: "Dr. Madan Dhanora",
      year: "",
      role: "Co-coordinator",
      linkedIn: "",
      email: "bhu.madan@gmail.com",
      instagram: "",
      profileImage:
        "https://res.cloudinary.com/dju84uvhd/image/upload/v1741432374/Dr_Madan_Dhnora_pcelwj.png",
    },
  ],
};

const teamSlice = createSlice({
  name: "team",
  initialState: TeamDetails,
  reducers: {},
});

export default teamSlice.reducer;
