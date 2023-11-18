import { DRight, DLeft, MLeft, MRight, MService, DService, DFooter, MFooter } from '@icons/Line';


const viewPortIcons = {
  header: {
    desktop: {
      Line: [<DLeft/>,<DRight/> ]
    },
    mobile: {
      Line: [<MLeft/>, <MRight/>]
    }
  },
  main: {
    desktop: {
      Line: [<DService/>]
    },
    mobile: {
      Line: [<MService/>]
    }
  },
  footer: {
    desktop: [<DFooter/>],
    mobile: [<MFooter/>]
  }

}

export {viewPortIcons}