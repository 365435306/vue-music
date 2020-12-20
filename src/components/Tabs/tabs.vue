<script>
export default {
  name: 'Tabs',
  props:{
    currentIndex:{
      type: [String,Number],
      default: 1
    }
  },
  methods: {
    updateCurrentIndex(index){
      this.$emit('changeCurrentIndex',index)
    }
  },
  render(){
    return(
      <div>
        <ul class="tabs-header">{this.$slots.default}</ul>
      </div>
    )
  }
}
</script>
<style lang="scss" scoped>
.tabs-header{
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 2px solid #ededed;
}
</style>
