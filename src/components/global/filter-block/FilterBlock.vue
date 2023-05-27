<script setup>
import { ref, computed } from "vue"

const date = ref()

const opPeoples = ref()
const togglePeoples = (event) => {
  opPeoples.value.toggle(event)
  if(!popupValAdult.value) popupValAdult.value++
}

const priceFrom = ref(null)
const priceUp = ref(null)

const classification = ref(null)
const classificationOptions = ref(['Бюджетный', 'Люкс'])

const restType = ref(null)
const restTypeOptions = ref(['Активный', 'Пассивный'])

const restImportant = ref(null)
const restImportantOptions = ref(['Романтика', 'Адреналин'])

const popupValAdult = ref(0)

const popupValKid = ref(0)
const popupValYouth = ref(0)
</script>
<template>
  <div class="filter-block">
    <div class="filter-block-top d-flex space-between">
      <div class="peoples d-flex flex-1 align-center" @click="togglePeoples">
        <div>
          <span>{{ popupValAdult ? popupValAdult : '__' }}</span>
          <span>Взрослые</span>
        </div> -
        <div>
          <span>{{ popupValKid ? popupValKid : '__' }}</span>
          <span>Дети</span>
        </div> -
        <div>
          <span>{{ popupValYouth ? popupValYouth : '__' }}</span>
          <span>Младенцы</span>
        </div>
        <OverlayPanel ref="opPeoples">
            <div class="peoples-popup">
              <div class="d-flex space-between align-center">
                <label for="stacked-buttons" class="font-bold block mb-2"> Взрослые </label>
                <InputNumber
                  v-model="popupValAdult"
                  inputId="horizontal-buttons"
                  showButtons
                  buttonLayout="horizontal"
                  incrementButtonIcon="pi pi-plus"
                  decrementButtonIcon="pi pi-minus"
                  min="0"
                />
              </div>
              <div class="d-flex space-between align-center">
                <label for="stacked-buttons" class="font-bold block mb-2"> Дети </label>
                <InputNumber
                  v-model="popupValKid"
                  inputId="horizontal-buttons"
                  showButtons
                  buttonLayout="horizontal"
                  incrementButtonIcon="pi pi-plus"
                  decrementButtonIcon="pi pi-minus"
                  min="0"
                />
              </div>
              <div class="d-flex space-between align-center">
                <label for="stacked-buttons" class="font-bold block mb-2"> Младенцы </label>
                <InputNumber
                  v-model="popupValYouth"
                  inputId="horizontal-buttons"
                  showButtons
                  buttonLayout="horizontal"
                  incrementButtonIcon="pi pi-plus"
                  decrementButtonIcon="pi pi-minus"
                  min="0"
                />
              </div>
              <span class="close-btn" @click="togglePeoples">
                <img src="@/assets/img/close-btn.png" alt="close">
              </span>
            </div>
        </OverlayPanel>
      </div>
      <div class="date-pick d-flex flex-1">
        <Calendar v-model="date" selectionMode="range" :manualInput="false" :minDate="new Date()" dateFormat="dd/mm/yy" placeholder="Даты"/>
      </div>
      <div class="nights d-flex flex-1 align-center">Количество ночей {{ night_count ?? '__' }}</div>
    </div>
    <div class="filter-block-bot d-flex space-between">
      <div class="rest-price d-flex flex-column">
        <div class="d-flex align-center">
          <img src="@/assets/img/material-symbols_filter-alt-outline.png" alt="material-symbols-filter">
          <span>Цена</span>
        </div>
        <div class="d-flex align-center">
          <span>от</span>
          <InputNumber v-model="priceFrom" locale="ru-RU" />
        </div>
        <div class="d-flex align-center">
          <span>до</span>
          <InputNumber v-model="priceUp" :min="priceFrom" locale="ru-RU" />
        </div>
      </div>
      <div class="rest-classification d-flex flex-column align-center">
        <div class="d-flex">
          <span>Классификация</span>
        </div>
        <div class="select-box d-flex">
          <SelectButton v-model="classification" :options="classificationOptions" aria-labelledby="basic" />
        </div>
      </div>
      <div class="rest-type d-flex flex-column align-center">
        <div class="d-flex">
          <span>Вид отдыха</span>
        </div>
        <div class="select-box d-flex">
          <SelectButton v-model="restType" :options="restTypeOptions" aria-labelledby="basic" />
        </div>
      </div>
      <div class="rest-importnat d-flex flex-column align-center">
        <div class="d-flex">
          <span>Что важнее на отдыхе?</span>
        </div>
        <div class="select-box d-flex">
          <SelectButton v-model="restImportant" :options="restImportantOptions" aria-labelledby="basic" />
        </div>
      </div>
      <div class="rest-btns d-flex flex-column align-center">
        <div class="d-flex">
          <input class="checkbox" type="checkbox" id="rest-checkbox" />
          <label for="rest-checkbox">Заполнить избранным</label>
        </div>
        <div class="d-flex mt-auto">
          <router-link to="/my_travel">
            <Button class="secondary" size="large" label="Подобрать" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.filter-block
  &-top
    gap: 1.5rem
    margin-bottom: 3rem
    @media (max-width: 900px)
      flex-direction: column
    & .peoples
      background: #FFFFFF
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
      border-radius: 15px
      padding: 0 2.5rem
      justify-content: center
      gap: 10px
      cursor: pointer
      @media (max-width: 900px)
        padding: .5rem
      & div span:first-child
        margin-right: 10px
    & .nights
      background: #FFFFFF
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
      border-radius: 15px
      justify-content: center
      cursor: pointer
      @media (max-width: 900px)
        padding: .5rem
  & .p-calendar
    width: 100%
  &-bot
    @media (max-width: 568px)
      flex-direction: column
      align-items: center
      gap: 1.5rem
      & a
        width: 100%
        margin-top: 1rem
    & .select-box
      margin-top: auto
      & .p-selectbutton
        display: flex
        gap: 0.3125rem
        & .p-button
          background: #FFFFFF
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
          border-radius: 1rem
          padding: 1rem .5rem
          min-width: 9rem
          &.p-highlight
            background: var(--my-primary-color)
            border-color: var(--my-primary-color)
        & .p-button-label
          font-weight: normal
          color: #000000
    & .rest-price
      max-width: 5.3rem
      width: 100%
      gap: .2rem
      & img
        max-width: 30px
        width: 100%
      & .p-inputnumber-input
        width: 100%
        max-height: 2.125rem
        max-width: 3.5rem
        border-radius: 10px
      & div
        gap: .5rem
    & .rest-classification
      padding-top: .5rem
    & .rest-btns
      max-width: 11.5rem
    & .rest-btns label:before
        content:''
        -webkit-appearance: none
        background-color: transparent
        border: 2px solid #000000
        border-radius: 10px
        // box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05)
        padding: 1rem
        display: inline-block
        position: relative
        vertical-align: middle
        cursor: pointer
        margin-right: .8rem
    & .rest-btns input:checked + label:after
        content: ''
        display: block
        position: absolute
        top: 12px
        left: 15px
        width: 6px
        height: 1rem
        border: solid #000000
        border-width: 0 2px 2px 0
        transform: rotate(45deg)
    & .rest-btns input
        padding: 0
        height: initial
        width: initial
        margin-bottom: 0
        display: none
        cursor: pointer
    & .rest-btns label
        position: relative
        cursor: pointer
        font-size: 1.2rem
        display: flex
        align-items: center
    & .rest-btns .mt-auto
      width: 100%
      & button
        width: 100%
.peoples-popup
  position: relative
  display: flex
  flex-direction: column
  gap: 2rem
  padding: 2rem 1rem
  & div
    gap: .5rem
  & .p-inputnumber-input
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)
    max-width: 120px
  & .p-inputnumber-button
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)
    background: transparent
    color: #000
    border: none
  & .p-button:enabled:hover
    background: var(--my-primary-color)
    color: #ffffff
    border-color: var(--my-primary-color)
  & .close-btn
    position: absolute
    top: 0
    right: 0
    cursor: pointer
</style>