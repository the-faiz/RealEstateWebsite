import React from 'react'
import './List.css';
import Card from './Card';

export default function List(props) {
    return (
        <>
            <div class="trending">
                <h1>{props.title}</h1>
                <div class="cards">
                    <Card imageURL="https://tse4.mm.bing.net/th?id=OIP.uDn2CICYi3Sd8LCYpr2-VwHaEK&pid=Api&P=0&h=220"/>
                    <Card imageURL="https://tse2.mm.bing.net/th?id=OIP.kkS94K_4w8MJ3aD5Rarw9wHaEL&pid=Api&P=0&h=220"/>
                    <Card imageURL="https://www.addressofchoice.com/aoc_assets/blog/1556875999_A_real_estate_investment_in_Pune_is_a_good_plan_to_fortify_your_future.jpg"/>
                    <Card imageURL="http://4.bp.blogspot.com/_350OO1cwB1U/TE2UKXsnu9I/AAAAAAAASmE/DQShy_5a7AY/s1600/26July10-4-klassic_row_homes-lohegaon-pune.jpg"/>
                    <Card imageURL="https://www.kasturi.com/wp-content/uploads/2019/03/ELEMENT-5-768x480.jpg" />
                    <Card imageURL="https://tse3.mm.bing.net/th?id=OIP.cdLPTxWYtRSbXdywwSXgmAHaEO&pid=Api&P=0&h=220"/>
                    <Card imageURL="https://tse4.mm.bing.net/th?id=OIP.uDn2CICYi3Sd8LCYpr2-VwHaEK&pid=Api&P=0&h=220"/>
                    <Card imageURL="https://tse2.mm.bing.net/th?id=OIP.kkS94K_4w8MJ3aD5Rarw9wHaEL&pid=Api&P=0&h=220"/>
                    <Card imageURL="https://www.addressofchoice.com/aoc_assets/blog/1556875999_A_real_estate_investment_in_Pune_is_a_good_plan_to_fortify_your_future.jpg"/>
                    <Card imageURL="http://4.bp.blogspot.com/_350OO1cwB1U/TE2UKXsnu9I/AAAAAAAASmE/DQShy_5a7AY/s1600/26July10-4-klassic_row_homes-lohegaon-pune.jpg"/>
                    <Card imageURL="https://www.kasturi.com/wp-content/uploads/2019/03/ELEMENT-5-768x480.jpg" />
                    <Card imageURL="https://tse3.mm.bing.net/th?id=OIP.cdLPTxWYtRSbXdywwSXgmAHaEO&pid=Api&P=0&h=220"/>
                </div>
            </div>
        </>
    )
}
