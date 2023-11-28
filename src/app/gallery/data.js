import image1 from "../../../public/images/HolyChildPhotos/DSC_2690.JPG";
import image2 from "../../../public/images/HolyChildPhotos/DSC_2572.JPG";
import image3 from "../../../public/images/HolyChildPhotos/DSC_2577.JPG";
import image4 from "../../../public/images/HolyChildPhotos/DSC_2594.JPG";
import image5 from "../../../public/images/HolyChildPhotos/DSC_2607.JPG";
import image6 from "../../../public/images/HolyChildPhotos/DSC_2608.JPG";
import image7 from "../../../public/images/HolyChildPhotos/DSC_2620.JPG";
import image8 from "../../../public/images/HolyChildPhotos/DSC_2628.JPG";
import image9 from "../../../public/images/HolyChildPhotos/DSC_2631.JPG";
import image10 from "../../../public/images/HolyChildPhotos/DSC_2634.JPG";
import image11 from "../../../public/images/HolyChildPhotos/DSC_2640.JPG";
import image12 from "../../../public/images/HolyChildPhotos/DSC_2646.JPG";
import image13 from "../../../public/images/HolyChildPhotos/DSC_2672.JPG";
import image14 from "../../../public/images/HolyChildPhotos/DSC_2674.JPG";
import image15 from "../../../public/images/HolyChildPhotos/DSC_2675.JPG";
import image16 from "../../../public/images/HolyChildPhotos/DSC_2677.JPG";
import image17 from "../../../public/images/HolyChildPhotos/DSC_2683.JPG";
import image18 from "../../../public/images/HolyChildPhotos/DSC_2695.JPG";
import image19 from "../../../public/images/HolyChildPhotos/DSC_2701.JPG";
import image20 from "../../../public/images/HolyChildPhotos/DSC_2704.JPG";
import image21 from "../../../public/images/HolyChildPhotos/DSC_2707.JPG";
import image22 from "../../../public/images/HolyChildPhotos/DSC_2710.JPG";
import image23 from "../../../public/images/HolyChildPhotos/DSC_2714.JPG";
import image24 from "../../../public/images/HolyChildPhotos/DSC_2718.JPG";
import image25 from "../../../public/images/HolyChildPhotos/DSC_2721.JPG";
import image26 from "../../../public/images/HolyChildPhotos/DSC_2723.JPG";
import image27 from "../../../public/images/HolyChildPhotos/DSC_2739.JPG";
import image28 from "../../../public/images/HolyChildPhotos/DSC_2740.JPG";
import image29 from "../../../public/images/HolyChildPhotos/DSC_2747.JPG";
import image30 from "../../../public/images/HolyChildPhotos/DSC_2749.JPG";
import image31 from "../../../public/images/HolyChildPhotos/DSC_2753.JPG";
import image32 from "../../../public/images/HolyChildPhotos/DSC_2779.JPG";
import image33 from "../../../public/images/HolyChildPhotos/DSC_2785.JPG";
import image34 from "../../../public/images/HolyChildPhotos/DSC_2794.JPG";
import image35 from "../../../public/images/HolyChildPhotos/DSC_2799.JPG";
import image36 from "../../../public/images/HolyChildPhotos/DSC_2809.JPG";
import image37 from "../../../public/images/HolyChildPhotos/DSC_2816.JPG";
import image38 from "../../../public/images/HolyChildPhotos/DSC_2832.JPG";
import image39 from "../../../public/images/HolyChildPhotos/DSC_2850.JPG";
import image40 from "../../../public/images/HolyChildPhotos/DSC_2863.JPG";


import staff1 from '../../../public/images/Teacher-Training/teacher1.jpg'
import staff2 from '../../../public/images/Teacher-Training/teacher2.jpg'
import staff3 from '../../../public/images/Teacher-Training/teacher3.jpg'
import staff4 from '../../../public/images/Teacher-Training/teacher4.jpg'
import staff5 from '../../../public/images/Teacher-Training/teacher5.jpg'
import staff6 from '../../../public/images/Teacher-Training/teacher6.jpg'
import staff7 from '../../../public/images/Teacher-Training/teacher7.jpg'
import staff8 from '../../../public/images/Teacher-Training/teacher8.jpg'
import staff9 from '../../../public/images/Teacher-Training/teacher9.jpg'
import staff10 from '../../../public/images/Teacher-Training/teacher10.jpg'
import staff11 from '../../../public/images/Teacher-Training/teacher11.jpg'
import staff12 from '../../../public/images/Teacher-Training/teacher12.jpg'
import staff13 from '../../../public/images/Teacher-Training/teacher13.jpg'
import staff14 from '../../../public/images/Teacher-Training/teacher14.jpg'
import staff15 from '../../../public/images/Teacher-Training/teacher15.jpg'
import staff16 from '../../../public/images/Teacher-Training/teacher16.jpg'



const data = {
  student:  [
    image1,
    image11,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image12,
    image13,
    image14,
    image15,    
  ],
  staff: [
    staff1,
    staff2,
    staff3,
    staff4,
    staff5,
    staff6,
    staff7,
    staff8,
    staff9,
    staff10,
    staff11,
    staff12,
    staff13,
    staff14,
    staff15,
    staff16,
    ]
}

export const updateData = () => {
  
  const newStudentImages = [image16, image17, image18, image19, image20, image21];

  data.student = [...data.student, ...newStudentImages];
};

export default data