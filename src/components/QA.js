import React from 'react';
import './QA.css';

const Data = [
  {
    id: '1',
    question: 'What do you call a dog magician?',
    answer: 'A labracadabrador.',
  },
  {
    id: '2',
    question: 'What do you call a funny mountain?',
    answer: 'Hill-arious.',
  },
  {
    id: '3',
    question: 'What did the astronaut say when he crashed into the moon?',
    answer: 'I Apollo-gize.',
  },
];

function QA() {
  return (
    <div className='faq_area section_padding_130' id='faq'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-sm-8 col-lg-6'>
            <div
              className='section_heading text-center wow fadeInUp effectSection'
              data-wow-delay='0.2s'
            >
              <h3>
                <span>Frequently </span> Asked Questions
              </h3>
              <p>
                Appland is completely creative, lightweight, clean super
                responsive app landing page.
              </p>
              <div className='line'></div>
            </div>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-12 col-sm-10 col-lg-8'>
            <div className='accordion faq-accordian' id='faqAccordion'>
              {Data.map((element) => {
                return (
                  <div
                    className='card border-0 wow fadeInUp effectSection'
                    data-wow-delay='0.2s'
                  >
                    <div className='card-header' id={'Heading' + element.id}>
                      <h6
                        className='mb-0 collapsed'
                        data-toggle='collapse'
                        data-target={'#collapse' + element.id}
                        aria-expanded='true'
                        aria-controls={'collapse' + element.id}
                      >
                        {element.question}
                        <span className='lni-chevron-up'></span>
                      </h6>
                    </div>
                    <div
                      className='collapse'
                      id={'collapse' + element.id}
                      aria-labelledby={'Heading' + element.id}
                      data-parent='#faqAccordion'
                    >
                      <div className='card-body'>
                        <p>{element.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className='support-button text-center d-flex align-items-center justify-content-center mt-4 wow fadeInUp effectSection'
              data-wow-delay='0.5s'
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QA;
