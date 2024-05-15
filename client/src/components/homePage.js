import React from "react";
import { Container, Header, List, Segment } from "semantic-ui-react";


export default function HomePage() {

    document.title = 'Home Page';

    return (
        <>
            <Container text>
                <Header as="h1" textAlign="center" className="text-Black">
                    !ברוכים הבאים למערכת ניהול עובדים
                </Header>
                <Segment>
                    <p style={{ textAlign: "center" }}>
                        מערכת זו מאפשרת לכם לנהל את רשומות העובדים שלכם בצורה יעילה וקלה.
                    </p>
                </Segment>
                <h2 style={{ textAlign: "center" }}>:היכולות העיקריות של המערכת</h2>
                <Container style={{ textAlign: "center" }}>
                    <List divided horizontal style={{ textAlign: "center", display: "inline-flex" }}>
                        <List.Item style={{ padding: "30px" }}>
                            <Header as="h3" className="text-Black">ניהול הרשאות</Header>
                            <List style={{ textAlign: "center" }}>
                                <List.Item>הגדרת הרשאות משתמשים</List.Item>
                                <List.Item>ניהול גישת משתמשים למידע</List.Item>
                            </List>
                        </List.Item>
                        <List.Item style={{ padding: "30px" }}>
                            <Header as="h3" className="text-Black">ניהול עובדים</Header>
                            <List style={{ textAlign: "center" }}>
                                <List.Item>הוספת עובדים חדשים (עם תמונה)</List.Item>
                                <List.Item>עדכון פרטי עובדים</List.Item>
                                <List.Item>מחיקת עובדים</List.Item>
                                <List.Item>ניהול תפקידים של עובדים</List.Item>
                                <List.Item>העברת עובדים לארכיון והחזרתם</List.Item>
                                <List.Item>הדפסה/ייצוא רשימת עובדים לאקסל</List.Item>
                            </List>
                        </List.Item>
                        <List.Item style={{ padding: "30px" }}>
                            <Header as="h3" className="text-Black">ניהול תפקידים</Header>
                            <List style={{ textAlign: "center" }}>
                                <List.Item>הוספת תפקידים חדשים</List.Item>
                                <List.Item>עדכון פרטי תפקידים</List.Item>
                                <List.Item>מחיקת תפקידים</List.Item>
                                <List.Item>הקצאת תפקידים לעובדים</List.Item>
                            </List>
                        </List.Item>
                    </List>
                </Container>
                <h2 style={{ textAlign: "center" }}>:יתרונות השימוש במערכת</h2>
                <List style={{ textAlign: "center" }}>
                    <List.Item className="text-Black">
                        <b className="text">יעילות:</b> המערכת מאפשרת לכם לחסוך זמן ומאמץ בניהול רשומות העובדים שלכם.
                    </List.Item>
                    <List.Item className="text-Black">
                        <b className="text">דיוק:</b> המערכת מבטיחה שהמידע על עובדיכם יהיה מעודכן ומדויק.
                    </List.Item>
                    <List.Item className="text-Black">
                        <b className="text">גמישות:</b> המערכת ניתנת להתאמה אישית לצרכים שלכם.
                    </List.Item>
                    <List.Item className="text-Black">
                        <b className="text">אבטחה:</b> המערכת מאבטחת את המידע על עובדיכם.
                    </List.Item>
                </List>
                <h2 style={{ textAlign: "center" }}>?למי מיועדת המערכת</h2>
                <p style={{ textAlign: "center" }} className="text-Black">
                    המערכת מיועדת לכל עסק, ארגון, מוסד או חנות שרוצה לנהל את רשומות העובדים שלו בצורה יעילה וקלה.
                </p>
                <h2 style={{ textAlign: "center" }}>!התחילו עוד היום</h2>
                <p style={{ textAlign: "center" }} className="text-Black">
                    הירשמו עכשיו ותתחילו ליהנות מכל היתרונות של מערכת ניהול עובדים.
                </p>
                <h2 style={{ textAlign: "center" }}>:לפרטים נוספים, צרו קשר איתנו</h2>
                <List style={{ textAlign: "center" }}>
                    <List.Item className="text-Black">טלפון: 050-1234567</List.Item>
                    <List.Item className="text-Black">[כתובת אימייל שהוסרה] :דוא"ל</List.Item>
                    <List.Item className="text-Black"> [https://www.example.com](https://www.example.com) :אתר</List.Item>
                </List>
                <h2 style={{ textAlign: "center" }}> !עובדים מרוצים, עסק מצליח</h2>
            </Container>

        </>
    );
}