import _ from 'lodash'
import React, { Component, createRef } from 'react'
import { Header, Image, List, Rail, Segment, Sticky } from 'semantic-ui-react'
export default function Footer() {
    return (<>

        <Segment textAlign="buttom" id="footer">

            <div>
                <List class="footer-item">
                    <List.Item className="text" as="h2" style={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        alignItems: "flex-end",
                        justifyContent: "space-between"
                    }}
                    >:לפרטים נוספים, צרו קשר איתנו</List.Item>

                    <List.Item className="text" style={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        alignItems: "flex-end",
                        justifyContent: "space-between"
                    }}>טלפון: 050-1234567</List.Item>
                    <List.Item className="text" style={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        alignItems: "flex-end",
                        justifyContent: "space-between"
                    }}>[כתובת אימייל שהוסרה] :דוא"ל</List.Item>
                    <List.Item className="text" style={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        alignItems: "flex-end",
                        justifyContent: "space-between"
                    }}>[https://www.example.com](https://www.example.com) :אתר</List.Item>

                    <List.Item className="text" as="h2" style={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        alignItems: "flex-end",
                        justifyContent: "space-between"
                    }}> !עובדים מרוצים, עסק מצליח</List.Item>
                </List>
            </div>

        </Segment >
    </>);
}


{/* <svg viewBox="0 0 960 300"> */ }
{/* <symbol id="s-text"> */ }
{/* <text textAnchor="middle" x="50%" y="80%">BRACHI </text> */ }
{/* <div>
                <List class="footer-item">
                    <List.Item class="footer-item" as="h2" style={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        alignItems: "flex-end",
                        justifyContent: "space-between"
                    }}
                    >:לפרטים נוספים, צרו קשר איתנו</List.Item>

                    <List.Item class="footer-item" style={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        alignItems: "flex-end",
                        justifyContent: "space-between"
                    }}>טלפון: 050-1234567</List.Item>
                    <List.Item class="footer-item" style={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        alignItems: "flex-end",
                        justifyContent: "space-between"
                    }}>:דוא"ל [כתובת אימייל שהוסרה]</List.Item>
                    <List.Item class="footer-item" style={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        alignItems: "flex-end",
                        justifyContent: "space-between"
                    }}>:אתר [https://www.example.com](https://www.example.com)</List.Item>

                    <List.Item class="footer-item" as="h2" style={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        alignItems: "flex-end",
                        justifyContent: "space-between"
                    }}> !עובדים מרוצים, עסק מצליח</List.Item>
                </List>
            </div> */}

{/* </symbol> */ }
{/* <g className="g-ants">
                    <use href="#s-text" className="text-copy"></use>
                    <use href="#s-text" className="text-copy"></use>
                    <use href="#s-text" className="text-copy"></use>
                    <use href="#s-text" className="text-copy"></use>
                    <use href="#s-text" className="text-copy"></use>

                </g> */}
{/* </svg> */ }
{/* <div className="font-color">
                brachig404@gmail.com
            </div> */}
