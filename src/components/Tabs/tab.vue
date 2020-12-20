<script>
export default {
  name: 'Tab',
  props: {
    label: {
      type: String,
      default: 'tab'
    },
    index:{
      type: [String,Number],
      default: 1
    }
  },
  computed: {
    active(){
      return this.$parent.currentIndex == this.index
    }
  },
  mounted(){
    this.$parent.showContent.push(this)
  },
  methods:{
    clickTabHandle(){
      this.$parent.updateCurrentIndex(this.index)
    }
  },
  render(){
    const classStyle = {
      tab: true,
      active: this.active
    }
    return(
      <li class={classStyle} onClick={this.clickTabHandle}>{this.label}</li>
    )
  }
}
</script>
<style lang="scss" scoped>
.tab{
  flex: 1;
  line-height: 40px;
  margin-right: 30px;
  position: relative;
  text-align: center;
}
.tab.active{
  border-bottom: 2px solid blue;
}
</style>