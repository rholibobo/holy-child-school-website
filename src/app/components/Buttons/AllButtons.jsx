import styles from "./buttons.module.css"

export function EnrollNowButton() {
    return (
        <main>
           <button type="button" className={styles.enroll_now_btn}>Enroll Now</button> 
        </main>
    );
}


export function EnrollYourChildButton() {
    return (
        <main>
           <button type="button" className={styles.enroll_yourchild_btn}>Enroll Your Child</button> 
        </main>
    );
}


export function ViewAllButton() {
    return (
        <main>
           <button type="button" className={styles.view_all_btn}>View All</button> 
        </main>
    );
}


export function ViewAllWhiteButton() {
    return (
        <main>
           <button type="button" className={styles.view_all_whitebtn}>View All</button> 
        </main>
    );
}

export function CarouselLeftButton() {
    return (
        <main>
            <button className={styles.carousel_left_btn}>&lt;</button>
        </main>
    )
}

export function CarouselRightButton() {
    return (
        <main>
            <button className={styles.carousel_right_btn}>&gt;</button>
        </main>
    )
}