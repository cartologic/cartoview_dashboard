const DefaultModalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.20)',
    zIndex: 999
  },
  content: {
    outline: 'none'
  }
};


const WidgetContainerConfigSchema = {
 title: {
   type: 'text',
   props:{
     placeholder:"Widget Title"
   }
 },
 // width: {
 //   type: 'select',
 //   options: {
 //     "1": "1/3",
 //     "2": "2/3",
 //     "3": "3/3"
 //   }
 // }
};
export {DefaultModalStyle, WidgetContainerConfigSchema};
