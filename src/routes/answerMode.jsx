import { Button, Card, Divider, Modal } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/reset.css';
import { KeyBoard } from '../components/Keyboard/Keyboard';

const fakeQuestions = [
    {
        question: '3 + 2',
        correct: '5'
    }, {
        question: '1 + 1',
        correct: '2'
    }, {
        question: '3 + 3',
        correct: '6'
    },
    {
        question: '3 + 3',
        correct: '6'
    },
    {
        question: '3 + 3',
        correct: '6'
    },
    {
        question: '3 + 3',
        correct: '6'
    }
]


export const AnswerMode = () => {
    const default_display = '0'
    const [display, setDisplay] = useState(default_display);
    const [result, setResult] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isResultModalOpen, setIsResultModalOpen] = useState(false);
    const [questionData, setQuestionData] = useState(fakeQuestions)
    const question = questionData.map((item) => { return item.question })
    const [index, setIndex] = useState(0)
    const [startTime, setStartTime] = useState(parseInt(Date.now() / 1000))

    const handleNext = () => {
        setIsModalOpen(false);
        if (index < questionData.length - 1) {
            setIndex(preIndex => { return preIndex + 1 })
            setDisplay(default_display)
            setStartTime(parseInt(Date.now() / 1000))
        } else {
            setIsResultModalOpen(true)
        }
    };

    const handleEnd = () => {
        setQuestionData(fakeQuestions)
        setIndex(0)
        setStartTime(parseInt(Date.now() / 1000))
        setDisplay(default_display)
        setIsResultModalOpen(false)
    }

    const handleSubmit = () => {
        setIsModalOpen(true);
        let endTime = parseInt(Date.now() / 1000)
        let answerInterval = endTime - startTime
        console.log(result);
        setResult(preResult => {
            console.log(preResult);
            preResult.push({
                question: questionData[index].question,
                correct: questionData[index].correct,
                userAnswer: display,
                startTime: startTime,
                endTime: endTime,
                interval: answerInterval,
                isCorrect: questionData[index].correct == display
            })

            return preResult
        }
        )
        console.log(result);
    }

    const handleKeyBoard = (value) => {
        if (value !== 'C' && value !== '+/-') {
            if (display == default_display) {
                setDisplay(default_display)
            }
        }

        if (display == default_display) {
            setDisplay(default_display)
        }
        if (!Number.isNaN(parseInt(value))) {
            if (!display.startsWith(default_display)) {
                setDisplay(display + value)
            } else {
                setDisplay(value)
            }

        } else if (value == 'C') {
            if (display == default_display || display.length == 1) {
                setDisplay(default_display)
            } else {
                setDisplay(display.substring(0, display.length - 1))
            }
        } else if (value == 'AC') {
            setDisplay(default_display)
        }
        else {
            if (display.startsWith('-')) {
                setDisplay(display.substring(1, display.length))
            } else {
                setDisplay('-' + display.trim())
            }
        }
    }

    const pageStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh'
    }

    return <div style={pageStyle} >
        <h1 style={{ fontSize: '3em' }}>
            {question[index]}
        </h1>


        <Card
            title={display}
            bordered={false}
            headStyle={{
                textAlign: 'right',
                fontSize: '1.5em'
            }}
            style={{
                marginTop: '2em',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <div style={{ flex: 'auto' }}>
                <KeyBoard clickKeyBoard={handleKeyBoard} />
            </div>
            <div>
                <Button style={{ marginTop: '0.3em', width: '100%' }} onClick={handleSubmit}>Submit</Button>
            </div>
        </Card>

        <Modal title='Result' open={isModalOpen} onOk={handleNext}
            footer={
                [
                    <Button key="back" onClick={handleNext}>
                        Next
                    </Button>
                ]
            }
        >
            <p>Your Answer: {display}</p>
            <p>Correct Answer: {questionData[index].correct}</p>
        </Modal>

        <Modal title='Answer' open={isResultModalOpen} onOk={handleNext}
            footer={
                [
                    <Button key="back" onClick={handleEnd}>
                        End
                    </Button>
                ]
            }
        >
            {
                result.map((res, index) => {
                    return <div>
                        <p>index: {index + 1} question: {res.question}</p>
                        <p>correct answer: {res.correct} your answer: {res.userAnswer}</p>
                        <p>correct: {res.isCorrect ? 'yes' : 'no'} interval: {res.interval}s</p>
                        <Divider />
                    </div>
                })
            }
        </Modal>
    </div>


}
