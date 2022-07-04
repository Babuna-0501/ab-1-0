import "./accordion.scss"

const Accordion = () => {
  return (
    <div className='accordion'>
        <div class="row">
        <div class="col">
            <h2>Шүүлт хийх</h2>
            <div class="tabs">
                <div class="tab">
                    <input type="checkbox" id="chck1"/>
                    <label class="tab-label" for="chck1">Брэнд</label>
                    <div class="tab-content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
                    </div>
                </div>
                <div class="tab">
                    <input type="checkbox" id="chck2"/>
                    <label class="tab-label" for="chck2">Төрөл</label>
                    <div class="tab-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                    </div>
                </div>
                <div class="tab">
                    <input type="checkbox" id="chck3"/>
                    <label class="tab-label" for="chck3">Үзүүлэлт</label>
                    <div class="tab-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                    </div>
                </div>
                <div class="tab">
                    <input type="checkbox" id="chck4"/>
                    <label class="tab-label" for="chck4">Өнгө</label>
                    <div class="tab-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                    </div>
                </div>
                <div class="tab">
                    <input type="checkbox" id="chck5"/>
                    <label class="tab-label" for="chck5">Үнэ</label>
                    <div class="tab-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Accordion;