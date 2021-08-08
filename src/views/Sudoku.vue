<template>
  <div v-if="Field" class="Sudoku" @click.self="pageClick">
    <transition name="translation">
      <div
          v-if="viewSettings.menuPanelShow"
          class="menuPanel">
        <div
            class="menuPanelItem"
            @click="menuPanelShow">
          {{ phrases.close }}
        </div>
        <div class="menuPanelItem "
             v-bind:class="{secondColor: viewSettings.prompt}"
             @click="promptClick">
          {{ phrases.prompt }}
        </div>
<!--        <transition name="translation">-->
          <div  style="display: flex; flex-direction: row; text-align: center">
            <transition name="translation">
            <div
                v-if="viewSettings.prompt"
                class="menuPanelItem"
                style="width: 100%"
                v-bind:class="{secondColor: sudokuDataClass.getAdvancedPossibles()[2]}"
                @click="sudokuDataClass.setAdvancedPossibly(2)">
              1
            </div>
            </transition>
              <transition name="translation">
            <div
                v-if="viewSettings.prompt"
                class="menuPanelItem"
                style="width: 100%"
                v-bind:class="{secondColor: sudokuDataClass.getAdvancedPossibles()[1]}"
                @click="sudokuDataClass.setAdvancedPossibly(1)">
              2
            </div>
              </transition>
          </div>
<!--        </transition>-->
        <!--        <transition name="translation">-->
        <!--          <div-->
        <!--              v-if="viewSettings.prompt"-->
        <!--              v-bind:class="{secondColor: sudokuDataClass.getAdvancedPossibles()[2]}"-->
        <!--              class="menuPanelItem" @click="sudokuDataClass.setAdvancedPossibly(2)">-->
        <!--            {{ phrases.onlyHere }}-->
        <!--          </div>-->
        <!--        </transition>-->
        <!--        <transition name="translation">-->
        <!--          <div-->
        <!--              v-if="viewSettings.prompt"-->
        <!--              v-bind:class="{secondColor: sudokuDataClass.getAdvancedPossibles()[1]}"-->
        <!--              class="menuPanelItem" @click="sudokuDataClass.setAdvancedPossibly(1)">-->
        <!--            {{ phrases.onePossiblyDelete }}-->
        <!--          </div>-->
        <!--        </transition>-->
        <div
            class="menuPanelItem"
            v-bind:class="{secondColor: viewSettings.choiceShow}" @click="viewSettings.choiceShow = !viewSettings.choiceShow">
          {{ phrases.sidePanel }}
        </div>
        <div class="menuPanelItem"
             v-bind:class="{secondColor: viewSettings.easyChoiceShow}"
             @click="() => {viewSettings.easyChoiceShow = !viewSettings.easyChoiceShow;easyChoice=false}">
          {{ phrases.comfortChoice }}
        </div>
        <transition name="translation">
          <div v-if="viewSettings.easyChoiceShow"
               class="menuPanelItem"
               v-bind:class="{secondColor: viewSettings.easyChoiceDbClick}"
               @click="viewSettings.easyChoiceDbClick = !viewSettings.easyChoiceDbClick">

            {{ phrases.easyChoiceDbClick }}
          </div>
        </transition>
        <div class="menuPanelItem" @click="toHome">
          домой
        </div>

        <!--        <div-->
        <!--            @click="router.push('Auth')"-->
        <!--            class="menuPanelItem"-->
        <!--        >-->
        <!--          {{phrases.auth}}-->
        <!--        </div>-->
        <!--        <div-->
        <!--            @click="deleteDataSettings"-->
        <!--            v-if="savedData.difficultyId.filter(item => item.finished).length !== 0"-->
        <!--            class="menuPanelItem">-->
        <!--          {{ phrases.deleteDataSettings }}-->
        <!--        </div>-->
        <div class="menuPanelItem">
          <div>
            {{ phrases.difficulty }}:
          </div>
          <div class="difficultyChoice">
            <div v-for="item in fields.filter(item=> item.length !==0)"
                 :key="item[0].difficulty"
                 v-bind:class="{primaryColor: item[0].difficulty === viewSettings.difficulty}"
                 @click="setDifficulty(item[0].difficulty)">
              {{ item[0].difficulty }}
            </div>
          </div>
        </div>
        <!--        <div-->
        <!--            class="menuPanelItem"-->
        <!--            @click="viewSettings.animations = !viewSettings.animations"-->
        <!--            v-bind:class="{secondColor: viewSettings.animations}"-->
        <!--        >-->
        <!--          viewSettings.animations-->
        <!--        </div>-->
      </div>
    </transition>
    <div class="s-page" @click.self="pageClick()">
      <header @click.self="pageClick()">
        <div>
          <svg
              aria-hidden="true"
              class="menuitem"
              focusable="false" height="1em" preserveAspectRatio="xMidYMid meet"
              style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" viewBox="0 0 24 24" width="1em"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" @click="menuPanelShow">
            <g fill="none">
              <path d="M21 18H3v-2h18v2zm0-5H3v-2h18v2zm0-5H3V6h18v2z" fill="#434691"/>
            </g>
          </svg>
        </div>
        <div class="menuBlock">
          <transition name="translation">
            <svg v-if="viewSettings.prompt" aria-hidden="true" class="menuitem"
                 focusable="false"
                 height="1em"
                 preserveAspectRatio="xMidYMid meet"
                 style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
                 v-bind:class="{secondColor: viewSettings.removePossibly}" viewBox="0 0 36 36" width="1em"
                 xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink" @click="viewSettings.removePossibly = !viewSettings.removePossibly">
              <path class="clr-i-outline clr-i-outline-path-1"
                    d="M33.87 8.32L28 2.42a2.07 2.07 0 0 0-2.92 0L4.27 23.2l-1.9 8.2a2.06 2.06 0 0 0 2 2.5a2.14 2.14 0 0 0 .43 0l8.29-1.9l20.78-20.76a2.07 2.07 0 0 0 0-2.92zM12.09 30.2l-7.77 1.63l1.77-7.62L21.66 8.7l6 6zM29 13.25l-6-6l3.48-3.46l5.9 6z"
                    fill="#434691"/>
            </svg>
          </transition>
          <svg
              aria-hidden="true"
              class="menuitem"
              focusable="false" height="1em" preserveAspectRatio="xMidYMid meet"
              style="transform: scale(-1, 1) " viewBox="0 0 24 24" width="1em"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" @click="undoLast">
            <g fill="none">
              <path
                  d="M11.995 4a8 8 0 1 0 7.735 10h-2.081a6 6 0 1 1-5.654-8a5.92 5.92 0 0 1 4.223 1.78L13 11h7V4l-2.351 2.35A7.965 7.965 0 0 0 11.995 4z"
                  fill="#434691"/>
            </g>
          </svg>

          <transition name="translation">
            <svg
                v-if="viewSettings.prompt"
                aria-hidden="true"
                class="menuitem"
                focusable="false"
                height="1em" preserveAspectRatio="xMidYMid meet" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
                v-bind:class="{secondColor: sudokuDataClass.getAutoSolve()}" viewBox="0 0 24 24" width="1em"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" @click="sudokuDataClass.setAutoSolve()">
              <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm-.99-14L6.88 17h1.9l1-2.81h4.44l.99 2.81h1.9L12.98 6h-1.97zm-.66 6.59l1.6-4.55h.09l1.6 4.55h-3.29z"
                  fill="#434691"/>
            </svg>
          </transition>
        </div>
        <div>
          <!--          <img @click="nextSudoku" class="menuitem" src="https://img.icons8.com/ios/50/000000/arrow.png"/>-->
          <svg aria-hidden="true" class="menuitem" focusable="false"
               height="1em" preserveAspectRatio="xMidYMid meet" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
               viewBox="0 0 512 512" width="1em"
               xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink" @click="nextSudoku">
            <path d="M256.25 16.042c-132.548 0-240 107.451-240 240s107.452 240 240 240s240-107.452 240-240s-107.45-240-240-240zM403.328 403.12A207.253 207.253 0 1 1 447.917 337a207.364 207.364 0 0 1-44.589 66.12z"
                  fill="#434691"/>
            <path d="M239.637 164.987l75.053 75.054H128.137v32H314.69l-75.053 75.054l22.627 22.627l113.681-113.681L262.264 142.36l-22.627 22.627z"
                  fill="#434691"/>
          </svg>
        </div>
      </header>
      <div class="Field-wrapper"
           v-bind:style="{flexDirection: flexW}"
           @click.self="pageClick()"
      >
        <div v-if="!rotate && viewSettings.choiceShow" class="choice" v-bind:style="{flexDirection: flexD}">
          <button class="choice-button mainColor" @click="SetValue(0)">
            X
          </button>
          <button
              v-for="item in 9"
              :key="item"
              class="choice-button mainColor"
              v-bind:class="{secondColor: item>-1 ? possiblyChoice.has(item) : true}"
              @click="SetValue(item)">
            {{ item }}
          </button>
        </div>
        <div
            class="Field"
            v-bind:class="{opacity:easyChoice}">
          <div v-for="line in 9" :key="line" class="Field-line">
            <SudokuButton v-for="item in 9"
                          :key="item"
                          v-bind:animations="viewSettings.animations"
                          v-bind:button-id="(line-1)*9+item - 1"
                          v-bind:dataView="fieldView[(line-1)*9+item-1]"
                          v-bind:local-data="Field[(line-1)*9+item-1]"
                          v-bind:possibly-show="viewSettings.prompt"
                          v-bind:size-btn="sizeBtn+'vmin'"
                          v-bind:solved="sudokuDataClass.checkWin()"
                          v-bind:stack="sudokuDataClass.getStack()"
                          v-bind:wrong-ids="sudokuDataClass.getWrongIds()"
                          v-on:select-button="buttonClick($event)"/>
          </div>
        </div>
        <div v-if="viewSettings.choiceShow" class="choice" v-bind:style="{flexDirection: flexD}">
          <button class="choice-button mainColor" @click="SetValue(0)">
            X
          </button>
          <button
              v-for="item in 9"
              :key="item"
              class="choice-button mainColor"
              v-bind:class="{secondColor: item>-1 ? possiblyChoice.has(item) : false}"
              @click="SetValue(item)">
            {{ item }}
          </button>
        </div>
      </div>
      <comfort-choice
          v-if="easyChoice"
          :params="comfortChoiceData"
          :redact="viewSettings.removePossibly"
          :size-btn="sizeBtn"
          v-on:send-value="SetValue($event)"
      />
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
// import router from '../router';
import SudokuButton from '../components/SudokuButton'
import FieldActions from '../store/sudoku/sudokuData'
import comfortChoice from "@/components/comfortChoice";
import router from "../router";

export default {
  name: 'Sudoku',
  components: {
    SudokuButton,
    comfortChoice
  },
  data() {
    return {
      easyChoice: false,
      sizeBtn: 10.5,
      rotate: false,
      flexD: 'column',
      flexW: 'wrap',
      selectedButton: -1,
      sudokuDataClass: null,
      Field: null,
      fieldId: null,
      comfortChoiceData: {},
      lang: 'ru',
      cashedField: {
        stringfield: '',
        id: null,
        stack: null,
        basefield:'',
        difficulty:null
      },
      cashedShowed: false,
      // difficulty:1,
      phrasesEn: {
        settings: 'settings',
        prompt: 'prompt',
        close: 'close',
        difficulty: 'difficulty',
        deleteDataSettings: 'reset progress',
        onlyHere: 'only here algorithm',
        onePossiblyDelete: 'one possibly delete algorithm',
        comfortChoice: 'comfort choice',
        easyChoiceDbClick: 'double click',
        sidePanel: 'side panel',
        sureConfirm: 'are you sure?',
        auth: 'authenticate'
      },
      phrasesRu: {
        settings: 'настройки',
        prompt: 'подсказки',
        close: 'закрыть',
        difficulty: 'сложность',
        deleteDataSettings: 'сбросить прогресс',
        onlyHere: 'первый алгоритм',
        onePossiblyDelete: 'второй алгоритм',
        comfortChoice: 'удобный выбор',
        easyChoiceDbClick: 'двойной клик',
        sidePanel: 'боковая панель',
        sureConfirm: 'вы уверены?',
        auth: 'регистрация'
      },
      viewSettings: {
        easyChoiceShow: true,
        easyChoiceDbClick: true,
        choiceShow: true,
        menuPanelShow: false,
        prompt: true,
        advancedPossibly: [1, 1, 0],
        removePossibly: false,
        animations: true,
        autoSolve: false,
        difficulty: 1
      }
    }
  },
  computed: {
    ...mapGetters({
      getDataOptions: 'dataManage/getDataOptions',
      fields: 'dataManage/fields',
      getFieldByDifficulty: 'dataManage/field',
    }),
    solved() {
      return this.sudokuDataClass.checkWin()
    },
    phrases() {
      return this.phrasesRu
      // if (this.lang === 'ru-RU') {
      //   return this.phrasesRu
      // } else {
      //   return this.phrasesEn
      // }
    },
    possiblyChoice() {
      return (this.selectedButton > -1 && this.viewSettings.prompt) ? this.Field.find(item => item.id === this.selectedButton).possibly : new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])
    },
    fieldView() {
      let view = []
      for (let i = 0; i < 81; i++) {
        view.push({
          id: i,
          bgcolor: ''
        })
      }
      if (this.selectedButton > -1 && this.selectedButton < 81) {
        view.forEach((item) => {
          if (item.id % 9 === this.selectedButton % 9 || Math.floor(item.id / 9) === Math.floor(this.selectedButton / 9) ||
              (Math.floor(Math.floor(item.id / 3) / 9) * 3 + Math.floor(item.id / 3) % 3) ===
              (Math.floor(Math.floor(this.selectedButton / 3) / 9) * 3 + Math.floor(this.selectedButton / 3) % 3)) {
            item.bgcolor = '#FDE0B0'
          }
        })
        view.find(item => item.id === this.selectedButton).bgcolor = '#E2E3FB'
      }
      return view
    }
  },
  methods: {
    ...mapActions({
      init: 'dataManage/init',
      solveField: 'dataManage/solveField',
    }),
    ...mapMutations({
      ignoreField: 'dataManage/IGNORE_FIELD'
    }),
    toHome() {
      router.push('Home')
    },
    undoLast() {
      this.sudokuDataClass.undoLastValue()
      this.cashedField.stringfield = this.sudokuDataClass.getFieldString()
      localStorage.setItem('cashedField', JSON.stringify(this.cashedField))

    },
    // help() {
    //   let url = "https://www.sudokuwiki.org/sudoku.htm?bd="
    //   this.Field.forEach(element => {
    //     url += element.value
    //   });
    //   window.open(url)
    // },
    promptClick() {
      this.easyChoice = 0
      this.viewSettings.prompt = !this.viewSettings.prompt
      this.sudokuDataClass.setAdvancedPossibles([1, 0, 0])
      if (this.viewSettings.autoSolve) {
        this.sudokuDataClass.setAutoSolve()
      }
    },
    menuPanelShow() {
      this.viewSettings.menuPanelShow = !this.viewSettings.menuPanelShow
      this.easyChoice = false
    },
    nextSudoku() {
      if (this.sudokuDataClass.checkWin()) {
        // console.log('hi')
        this.solveField([this.fieldId, this.sudokuDataClass.getFieldString(), this.viewSettings.difficulty])
        // this.cashedField.id = null
        // this.cashedField.stringfield = ''
        // this.cashedField.stack = ''
        if (this.cashedField.id === this.fieldId) {
          localStorage.removeItem('cashedField')
        }
      } else {
        this.cashedField = {
          stringfield: '',
          id: null,
          stack: null,
          basefield:'',
          difficulty:null
        }
        this.ignoreField(this.viewSettings.difficulty)
      }
      // if (this.fields[this.viewSettings.difficulty].length === 0) {
      //   this.viewSettings.difficulty = 0
      // }
      this.Field = null
      this.setLocalField()
    },
    SetValue(value) {
      if (this.viewSettings.removePossibly) {
        this.sudokuDataClass.removeFieldPossibly(this.selectedButton, value)
      } else {
        this.sudokuDataClass.setFieldValue(this.selectedButton, value)
      }
      this.selectedButton = -1
      this.easyChoice = false
      this.cashedField.stringfield = this.sudokuDataClass.getFieldString()
      localStorage.setItem('cashedField', JSON.stringify(this.cashedField))
      // setTimeout(()=>{
      //
      // },0)

    },
    pageClick() {
      this.selectedButton = -1
      this.easyChoice = false
      this.viewSettings.menuPanelShow = false
    },
    buttonClick(data) {
      this.viewSettings.menuPanelShow = false
      this.easyChoice = false
      setTimeout(() => {
        if (!this.viewSettings.easyChoiceDbClick) {
          this.selectedButton = data.id
        }
        this.comfortChoiceData.left = data.left
        this.comfortChoiceData.top = data.top
        this.comfortChoiceData.possibly = this.possiblyChoice
        this.comfortChoiceData.buttonId = data.id
        this.comfortChoiceData.value = this.Field[data.id].value
        let x = []
        if (this.sudokuDataClass.getStack().some(item => item.id === data.id && item.possibly)) {
          this.sudokuDataClass.getStack().filter(item => item.id === data.id && item.possibly).forEach(item => {
            x.push(item.possibly)
          })
        }
        this.comfortChoiceData.possiblyDeleted = x
        if (data.id === this.selectedButton
            && this.viewSettings.easyChoiceShow
            && !this.Field[data.id].const
            && !(this.Field[data.id].possibly.size === 0 && this.Field[data.id].value === 0)) {
          this.easyChoice = true
        } else {
          this.selectedButton = data.id
        }
      }, 0)
    },
    keywordClick(e) {
      if (+e.key >= 0 && +e.key <= 9) {
        this.SetValue(+e.key)
      }
      if (e.key === 'Backspace') {
        this.SetValue(0)
      }
      if (e.key === "Escape") {
        this.pageClick()
      }
      if (e.key === 'ArrowLeft') {
        this.selectedButton -= 1
      }
      if (e.key === 'ArrowRight') {
        this.selectedButton += 1
      }
      if (e.key === 'ArrowDown') {
        this.selectedButton += 9
      }
      if (e.key === 'ArrowUp') {
        this.selectedButton -= 9
      }
    },
    goBack() {
      this.$router.push({name: 'SudokuHome'})
    },
    updateSize() {
      // localStorage.clear()
      if (window.innerWidth < window.innerHeight * 1.1) {
        this.sizeBtn = 10.5
        this.rotate = true
        this.flexD = 'row'
        this.flexW = 'column'
      } else {
        this.sizeBtn = 9
        this.rotate = false
        this.flexD = 'column'
        this.flexW = 'row'
      }
    },
    setLocalField() {
      this.pageClick()
      if (!this.sudokuDataClass) {
        this.sudokuDataClass = new FieldActions.sudokuData([...this.viewSettings.advancedPossibly],
            this.viewSettings.autoSolve)
      }
      if (this.cashedField.id && !this.cashedShowed) {
        // console.log('123')
        this.Field = this.sudokuDataClass.setFieldStack(this.cashedField.basefield,this.cashedField.stringfield, this.cashedField.stack)
        this.fieldId = this.cashedField.id
        this.viewSettings.difficulty = this.cashedField.difficulty
        this.cashedShowed = true
      } else {
        let data = this.getFieldByDifficulty(this.viewSettings.difficulty)
        if (data === undefined) {
          this.viewSettings.difficulty = this.fields.filter(item => item.length !== 0)[0][0].difficulty
          data = this.getFieldByDifficulty(this.viewSettings.difficulty)
        }
        this.Field = this.sudokuDataClass.setField(data.field)
        this.fieldId = data.id
        this.cashedField.id = data.id
        this.cashedField.basefield = data.field
        this.cashedField.difficulty = this.viewSettings.difficulty
        this.cashedField.stack = this.sudokuDataClass.getStack()
      }
    },
    setDifficulty(value) {
      if (this.viewSettings.difficulty !== value) {
        this.viewSettings.difficulty = value
        this.cashedShowed = true
        this.setLocalField()
      }
    },
    message(e) {
      console.log(e)
    },
    deleteDataSettings() {
      if (confirm(this.phrases.sureConfirm)) {
        localStorage.removeItem('savedData')
        window.location.reload()
      }
    },
    intervalSave() {
      setTimeout(() => {
        // console.log(1)
        this.viewSettings.advancedPossibly = this.sudokuDataClass.getAdvancedPossibles()
        this.viewSettings.autoSolve = this.sudokuDataClass.getAutoSolve()
        localStorage.setItem('viewSettings', JSON.stringify(this.viewSettings))
      }, 0)
    }
  },
  created() {
    window.addEventListener('resize', this.updateSize);
  },
  mounted() {
    this.updateSize()
    document.addEventListener('keydown', this.keywordClick)
    document.addEventListener('click', this.intervalSave)
    this.lang = navigator.language || navigator.userLanguage
    if (localStorage.getItem('viewSettings')) {
      this.viewSettings = {...JSON.parse(localStorage.getItem('viewSettings'))}
    }
    if (localStorage.getItem('cashedField')) {
      this.cashedField = {...JSON.parse(localStorage.getItem('cashedField'))}
    }
    this.setLocalField()
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.keywordClick)
    document.removeEventListener('click', this.intervalSave)
    window.removeEventListener('resize', this.updateSize)
  },
  updated() {
    if (this.sudokuDataClass.getAutoSolve() && this.sudokuDataClass.checkWin() && this.Field) {
      setTimeout(() => {
        if (this.sudokuDataClass.getAutoSolve() && this.sudokuDataClass.checkWin() && this.Field) {
          this.nextSudoku()
        }
      }, 2500)
    }
  }
}
</script>
<style>
.Sudoku {
  display: flex;
  flex-direction: row;
  margin: 0;
  height: 100vh;
  overflow: hidden;
  background-color: #F3F1E9;
}

.Field {
  display: flex;
  flex-direction: column;
  padding: 0.7vmin;
  background: #FFFFFF;
  border-radius: 0.8vmin;
}

header {
  justify-self: flex-start;
  align-self: flex-start;
  margin-left: auto;
  margin-right: auto;
  max-width: 100vw;
  width: 105vmin;
  height: 6vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1vh;
  overflow: hidden;
}

.menuitem {
  height: 6vh;
  width: 6vh;
  overflow: hidden;
  box-sizing: border-box;
  padding: 5px;
  user-select: none;
  fill: #434691;
}

.menuPanel {
  word-wrap: normal;
  position: absolute;
  overflow: hidden;
  border-color: white;
  background-color: white;
  box-sizing: border-box;
  border-style: solid;
  border-radius: 10px;
  margin-top: 6vh;
  user-select: none;
  z-index: 1;
  color: #434691;
}

.menuPanelItem {
  box-sizing: border-box;
  font-size: 4vh;
  padding: 0.5vmin 1.6vmin 0.5vmin 1.6vmin;
  max-width: 98vw;
  border-radius: 8px;
  border-color: white;
  border-style: solid;
  background-color: #F5F5F5;
  text-align: left;
}

.translation-enter-active, .translation-leave-active {
  transition: transform .5s;
  transform: translate(0) scale(1);
}

.translation-enter, .translation-leave-to {
  transform: translate(-66vw) scale(0);
}

.difficultyChoice {
  display: flex;
  flex-direction: row;
}

.difficultyChoice div {
  text-align: center;
  margin-left: 5px;
  width: 5vmin;
  font-size: 5vmin;
  border-radius: 3px;
  background: #E2E3FB;
}

.Field-line {
  display: flex;
  flex-direction: row;
}

.Field-wrapper {
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.s-page {
  margin: auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  background-color: #F3F1E9;

}

.choice {
  display: flex;
  flex-direction: row;
  margin: 2vmin;
  border-radius: 8px;
  border-color: white;
  border-style: solid;
  background-color: white;
}

.choice-button {
  border-radius: 6px;
  border-color: white;
  border-style: solid;
  font-size: 3.5vmin;
  width: 8.5vmin;
  height: 8.5vmin;
  color: #434691;
  user-select: none;
}

.menuBlock {
  display: flex;
  flex-direction: row;
}
</style>
