import { useContext } from 'react';
import {
  Accordion,
  Row,
  Col,
  useAccordionButton,
  AccordionContext,
} from 'react-bootstrap';

function CustomToggle({ children, eventKey }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(eventKey);

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <div
      className={
        isCurrentEventKey ? 'd-grid' : 'd-grid border-bottom border-white'
      }
    >
      <button
        className="btn py-4 d-flex justify-content-between align-items-center text-start"
        onClick={decoratedOnClick}
        type="button"
      >
        <h3 className="m-0 text-white me-3">{children}</h3>
        {isCurrentEventKey ? (
          <div className="ms-3">
            <svg
              fill="none"
              height="48"
              viewBox="0 0 48 48"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36 30L24 18L12 30"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
              />
            </svg>
          </div>
        ) : (
          <div className="ms-3">
            <svg
              fill="none"
              height="48"
              viewBox="0 0 48 48"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 18L24 30L36 18"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
              />
            </svg>
          </div>
        )}
      </button>
    </div>
  );
}

function Faq() {
  return (
    <Row>
      <Col className="my-5 pb-3">
        <h2 className="text-white pb-3 mb-4">FAQ</h2>
        <Accordion defaultActiveKey="0" flush>
          <div>
            <CustomToggle eventKey="0">Что такое IDE?</CustomToggle>
            <Accordion.Collapse eventKey="0">
              <article className="px-3 text-white">
                <p>
                  Интегрированная среда разработки (IDE) — это программное
                  приложение, которое позволяет разработчикам писать, отлаживать
                  и тестировать код, используя при этом один из нескольких
                  языков программирования. Интегрированные среды разработки
                  популярны среди разработчиков, потому что они ускоряют и
                  упрощают работу по написанию кода. Так же как писатели
                  используют текстовые редакторы, а бухгалтеры — электронные
                  таблицы, разработчики программного обеспечения применяют IDE,
                  чтобы повысить продуктивность.
                </p>
              </article>
            </Accordion.Collapse>
          </div>
          <div>
            <CustomToggle eventKey="1">Какие бывают IDE?</CustomToggle>
            <Accordion.Collapse eventKey="1">
              <article className="px-3 text-white">
                <p>
                  Интегрированные среды разработки (IDE) можно разделить на
                  несколько различных категорий в зависимости от того, какую
                  разработку приложений они поддерживают и как работают.
                </p>
                <p>
                  <b>Облачные IDE</b>
                </p>
                <p>
                  Используются для написания, редактирования и компиляции кода
                  непосредственно в браузере, что избавляет их от необходимости
                  загружать программное обеспечение на локальные машины.
                  Облачные IDE имеют стандартизированную среду разработки, могут
                  работать с любой машины и используют вычислительные ресурсы из
                  облака, что освобождает ресурсы локальной машины.
                </p>
                <p>
                  <b>Локальные IDE</b>
                </p>
                <p>
                  Устанавливаются и запускаются непосредственно на локальных
                  машинах. Требуют загрузки и установки дополнительных библиотек
                  в зависимости от требований проекта и языка разработки.
                  Установка локальных IDE может отнимать много времени и быть
                  сложной, а различия в конфигурации между локальной машиной и
                  производственной средой — привести к ошибкам в программном
                  обеспечении.
                </p>
              </article>
            </Accordion.Collapse>
          </div>
          <div>
            <CustomToggle eventKey="2">
              В чём особенность IDE Run IT?
            </CustomToggle>
            <Accordion.Collapse eventKey="2">
              <article className="px-3 text-white">
                <p>
                  Run IT — это облачная интегрированная среда разработки (IDE),
                  в которой можно создавать и запускать код на языке JavaScript,
                  а также выполнять его отладку напрямую в браузере. Run IT
                  можно запустить на любом устройстве, с любой операционной
                  системой.В перспективе расширение набора функций: поддержка
                  других популярных языков программирования, совместная работа с
                  другими участниками, а также готовые шаблоны с кодом для более
                  удобной и быстрой работы.
                </p>{' '}
              </article>
            </Accordion.Collapse>
          </div>
          <div>
            <CustomToggle eventKey="3">
              Как инструменты IDE помогают разработчикам?
            </CustomToggle>
            <Accordion.Collapse eventKey="3">
              <article className="px-3 text-white">
                <p>
                  Большинство IDE включают в себя функции, выходящие за рамки
                  обычного редактора кода. В одном приложении объединено
                  множество различных инструментов, благодаря которым
                  разработчики могут быстро приступить к программированию новых
                  приложений вместо того, чтобы вручную интегрировать и
                  настраивать различное ПО. Вот несколько важных функций IDE:
                </p>
                <p>
                  <b>Автоматизация редактирования кода</b>
                </p>
                <p>
                  IDE знает правила структурирования утверждений в языках
                  программирования и автоматически редактирует исходный код.
                </p>
                <p>
                  <b>Выделение синтаксиса</b>
                </p>
                <p>
                  IDE определяет язык, на котором пишут код, и выделяет разным
                  цветом функции, переменные и операторы. Это помогает быстро
                  визуально считывать синтаксис.
                </p>
                <p>
                  <b>Автозаполнение</b>
                </p>
                <p>
                  IDE может предложить продолжить строку на основе первых
                  введённых символов. Это позволяет быстрее вводить названия
                  функций и библиотек, не ошибаться в синтаксисе.
                </p>
                <p>
                  <b>Поддержка рефакторинга</b>
                </p>
                <p>
                  IDE могут использовать авторефакторинг с целью сделать
                  исходный код более эффективным и читаемым без изменения его
                  основной функциональности.
                </p>
                <p>
                  <b>Автоматизация локальной сборки</b>
                </p>
                <p>
                  IDE повышают производительность труда программистов, выполняя
                  повторяющиеся задачи разработки, которые обычно являются
                  частью каждого изменения кода.
                </p>
                <p>
                  <b>Компиляция</b>
                </p>
                <p>
                  IDE компилирует или преобразует код, написанный разработчиком,
                  в язык, понятный операционной системе.
                </p>
                <p>
                  <b>Тестирование</b>
                </p>
                <p>
                  IDE позволяет разработчикам автоматизировать модульные тесты
                  локально, прежде чем программное обеспечение будет
                  интегрировано с кодом других разработчиков и будут запущены
                  более сложные интеграционные тесты.
                </p>
                <p>
                  <b>Отладка</b>
                </p>
                <p>
                  Помогает устранить ошибки в коде и подсказывает, как их
                  исправить.
                </p>
              </article>
            </Accordion.Collapse>
          </div>
        </Accordion>
      </Col>
    </Row>
  );
}

export default Faq;
