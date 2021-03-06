import React,{useState, useEffect} from 'react';
import { useSelector } from 'react-redux'
import classes from './rightbarmenu.module.css'
import { useDispatch } from 'react-redux'
import { setCare, setContact, setFeed, setParty, setHygeine, setStatus, setMedical } from "../../redux/actions/sim.action";




const RightBarMenu = () => {
  const [zoom, setZoom] = useState(100)
  const [isStat,setStat] = useState(true)
  const [activPosition, setPosition] = useState('M2217.2 223.85l272.71 0 0 -33.61 0 -173.43c0,-9.26 -7.55,-16.81 -16.81,-16.81l-239.1 0 -0.21 0c-9.16,0.11 -16.6,7.62 -16.6,16.8l0 207.05z')

  const dispatch = useDispatch()
  const feedProgress = useSelector((state) => state.sim.feed)
  const contactProgress = useSelector((state) => state.sim.contact)
  const medicalProgress = useSelector((state) => state.sim.medical)
  const careProgress = useSelector((state) => state.sim.care)
  const partyProgress = useSelector((state) => state.sim.party)
  const hygeineProgress = useSelector((state) => state.sim.hygeine)

//   let start = 12*60*60*1000
//  let end = 12.008*60*60*1000

// let latitude = ((end-start)*100)/70 //вряемя проходждения прогрессбара( время от последнего до дедлайна + 30%)
// const timeout = latitude/100
let timeout = {
  feed: 50000000000,
  care: 7000000000,
  contact: 15000000000,
  medical: 20000000000,
  party: 50000000000,
  hygeine: 6000000000
}


  // const [feedProgress, setFeed] = useState(100)
  // const [contactProgress, setContact] = useState(100)
  // const [medicalProgress, setMedical] = useState(100)
  // const [careProgress, setCare] = useState(100)
  // const [partyProgress, setParty] = useState(100)
  // const [hygeineProgress, setHygeine] = useState(100)

  const [feedColor, setFeedColor] = useState('green')
  const [contactColor, setContactColor] = useState('green')
  const [medicalColor, setMedicalColor] = useState('green')
  const [careColor, setCareColor] = useState('green')
  const [partyColor, setPartyColor] = useState('green')
  const [hygeineColor, setHygeineColor] = useState('green')



  
  useEffect(()=>{
  

        if(feedProgress >= 30){
          setTimeout(() => dispatch(setFeed(feedProgress - 1)), timeout.feed);
        }else{
           dispatch(setStatus('green'))
             if(feedProgress >= 10){
               
               setTimeout(() => {
                dispatch(setFeed(feedProgress - 1))
                setFeedColor("#ffcb11")
                }, timeout.feed)
    
                dispatch(setStatus("#ffcb11"))
              }else{
                if(feedProgress >= 0){
                 
    
                   setTimeout(() => {
                    dispatch(setFeed(feedProgress - 1))
                    setFeedColor("red")
                   }, timeout.feed); 
                  }
                  dispatch(setStatus("red"))
                }
        }
    
    }, [feedProgress])


useEffect(()=>{

  if(contactProgress >= 30){
    setTimeout(() => dispatch(setContact(contactProgress - 1)), timeout.contact);
  }else{
     dispatch(setStatus('green'))
       if(contactProgress >= 10){
         
         setTimeout(() => {
          dispatch(setContact(contactProgress - 1))
           setContactColor("#ffcb11")
          }, timeout.contact)

          dispatch(setStatus("#ffcb11"))
        }else{
          if(contactProgress >= 0){
           

             setTimeout(() => {
              dispatch(setContact(contactProgress - 1))
              setContactColor("red")
             }, timeout.contact); 
            }
            dispatch(setStatus("red"))
          }
  }

}, [contactProgress])

useEffect(()=>{

  if(careProgress >= 30){
    setTimeout(() => dispatch(setCare(careProgress - 1)), timeout.care);
  }else{
     dispatch(setStatus('green'))
       if(careProgress >= 10){
         
         setTimeout(() => {
          dispatch(setCare(careProgress - 1))
           setCareColor("#ffcb11")
          }, timeout.care)

          dispatch(setStatus("#ffcb11"))
        }else{
          if(careProgress >= 0){
           

             setTimeout(() => {
              dispatch(setCare(careProgress - 1))
                  setCareColor("red")
             }, timeout.care); 
            }
            dispatch(setStatus("red"))
          }
  }

}, [careProgress])

useEffect(()=>{

  if(medicalProgress >= 30){
    setTimeout(() => dispatch(setMedical(medicalProgress - 1)), timeout.medical);
  }else{
     dispatch(setStatus('green'))
       if(medicalProgress >= 10){
         
         setTimeout(() => {
          dispatch(setMedical(medicalProgress - 1))
           setMedicalColor("#ffcb11")
          }, timeout.medical)

          dispatch(setStatus("#ffcb11"))
        }else{
          if(medicalProgress >= 0){
           

             setTimeout(() => {
              dispatch(setMedical(medicalProgress - 1))
                  setMedicalColor("red")
             }, timeout.medical); 
            }
            dispatch(setStatus("red"))
          }
  }

}, [medicalProgress])

useEffect(()=>{

  if(partyProgress >= 30){
    setTimeout(() => dispatch(setParty(partyProgress - 1)), timeout.party);
  }else{
     dispatch(setStatus('green'))
       if(partyProgress >= 10){
         
         setTimeout(() => {
          dispatch(setParty(partyProgress - 1))
           setPartyColor("#ffcb11")
          }, timeout.party)

          dispatch(setStatus("#ffcb11"))
        }else{
          if(partyProgress >= 0){
           

             setTimeout(() => {
              dispatch(setParty(partyProgress - 1))
                   setPartyColor("red")
             }, timeout.party); 
            }
            dispatch(setStatus("red"))
          }
  }

}, [partyProgress])

useEffect(()=>{

  if(hygeineProgress >= 30){
    setTimeout(() => dispatch(setHygeine(hygeineProgress - 1)), timeout.hygeine);
  }else{
     dispatch(setStatus('green'))
       if(hygeineProgress >= 10){
         
         setTimeout(() => {
          dispatch(setHygeine(hygeineProgress - 1))
           setHygeineColor("#ffcb11")
          }, timeout.hygeine)

          dispatch(setStatus("#ffcb11"))
        }else{
          if(hygeineProgress >= 0){
           

             setTimeout(() => {
              dispatch(setHygeine(hygeineProgress - 1))
                  setHygeineColor("red")
             }, timeout.hygeine); 
            }
            dispatch(setStatus("red"))
          }
  }

}, [hygeineProgress])


  function ZoomUp(){
    setZoom(zoom+5)
  }
  function ZoomDown(){
    setZoom(zoom-5)
  }
  function toggleStat(e){
    setPosition(e.target.attributes[1].value)
    setStat(!isStat)
  }

  return (
    <div className={classes.bar}>
      <svg width={`${zoom}mm`} height="auto" version="1.1" viewBox="0 0 2820.09 1233.52">
      <defs>
 <linearGradient id="id0" gradientUnits="objectBoundingBox" x1="66.7499%" y1="103.641%" x2="66.7502%" y2="0.000148229%">
  <stop offset="0" stop-opacity="1" stop-color="#A42B21"/>
  <stop offset="0.231373" stop-opacity="1" stop-color="#793637"/>
  <stop offset="0.611765" stop-opacity="1" stop-color="#BB6767"/>
  <stop offset="0.780392" stop-opacity="1" stop-color="#E0BABA"/>
  <stop offset="1" stop-opacity="1" stop-color="red"/>
</linearGradient>
 <linearGradient id="id1" gradientUnits="objectBoundingBox" x1="66.7499%" y1="103.641%" x2="66.7502%" y2="0.000148238%">
  <stop offset="0" stop-opacity="1" stop-color="#009846"/>
  <stop offset="0.231373" stop-opacity="1" stop-color="#447937"/>
  <stop offset="0.611765" stop-opacity="1" stop-color="#75BB67"/>
  <stop offset="0.780392" stop-opacity="1" stop-color="#C4DFBA"/>
  <stop offset="1" stop-opacity="1" stop-color="#00FF08"/>
 </linearGradient>
 </defs>
  <g id="Слой_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <path className={classes.fil0} d="M45.72 1154.2c34.41,-390.8 19.72,-554.43 -45.03,-894.72 -2.68,-21.27 2.48,-38.05 14.76,-50.77 22.74,-23.55 44.05,-21.83 73.3,-21.83l99.48 0 2305.04 0 222.51 0c37.53,4.27 57.26,24.18 65.21,54.45 44.06,299.86 58.71,607.07 2.35,932.03 -11.65,38.23 -33.72,58.68 -66.89,60.16l-2606.87 -6.38c-46.9,-2.12 -70.74,-24.21 -63.86,-72.94z"/>
  <path className={classes.fil1} onClick={toggleStat} d="M2217.2 223.85l272.71 0 0 -33.61 0 -173.43c0,-9.26 -7.55,-16.81 -16.81,-16.81l-239.1 0 -0.21 0c-9.16,0.11 -16.6,7.62 -16.6,16.8l0 207.05z"/>
  <path className={classes.fil2} d="M33.92 254.33c24.49,128.76 47.14,258.18 57.18,388.99 13.2,171.86 3.19,342.45 -11.9,513.83l-0.08 0.88 -0.12 0.87c-3.91,27.66 4.58,33.33 31.41,34.63l2605.23 6.38c20.5,-1.23 29.17,-16.27 34.96,-34.44 53.05,-307.57 42.49,-609.62 -2.56,-917.23 -5.25,-18.15 -15.77,-25.3 -34.3,-27.75l-149.89 0 -70.57 0 -272.71 0 -111.14 0 -1967.58 0 -53.1 0c-18.95,0 -35.05,-3 -49.12,11.57 -5.98,6.19 -6.63,14.06 -5.71,22.27z"/>
  <path className={classes.fil4} onClick={ZoomUp} d="M2567.47 63.32c25.52,0 46.22,20.69 46.22,46.22 0,25.52 -20.69,46.22 -46.22,46.22 -25.52,0 -46.22,-20.69 -46.22,-46.22 0,-25.52 20.69,-46.22 46.22,-46.22z"/>
  <path className={classes.fil4} onClick={ZoomDown} d="M2678.39 63.32c25.52,0 46.22,20.69 46.22,46.22 0,25.52 -20.69,46.22 -46.22,46.22 -25.52,0 -46.22,-20.69 -46.22,-46.22 0,-25.52 20.69,-46.22 46.22,-46.22z"/>
  <polygon className={classes.fil5} points="2541.84,104.49 2562.43,104.49 2562.43,83.9 2572.52,83.9 2572.52,104.49 2593.11,104.49 2593.11,114.57 2572.52,114.57 2572.52,135.17 2562.43,135.17 2562.43,114.57 2541.84,114.57 "/>
  <polygon className={classes.fil5} points="2652.75,104.49 2704.03,104.49 2704.03,114.57 2652.75,114.57 "/>
  
  <path className={classes.fil2} d={activPosition}/>
  <path className={classes.fil3} d="M2423.47 105.31c-11.13,13.49 -29.81,2.86 -28.69,-12.44 1.72,-23.45 32.07,-27.72 34.12,-3.98 0.47,5.44 -1.34,11.47 -5.43,16.42zm-65.58 -47.66c3.35,-13.8 16.97,-24.99 29.59,-13.86 10.01,8.83 7.14,28.02 -3.7,34.94 -5.16,3.29 -12.52,4.36 -19.08,-0.67 -6.73,-5.15 -8.65,-12.8 -6.8,-20.42zm-49.53 35.93c-0.77,11.16 -10.6,20.47 -23.5,14.41 -8.3,-4.89 -11.56,-14.32 -10.61,-21.54 0.61,-4.61 2.97,-9.42 6.7,-12.24 12.34,-9.35 28.4,5.06 27.41,19.37zm29.02 -14.96c-20.03,13.29 -39.26,-24.43 -18.28,-37.51 8.66,-5.4 18.74,-0.6 24.61,8.34 2.25,5.05 3.46,7.87 2.52,14.59 -0.84,6.04 -3.57,11.07 -8.86,14.58zm-13.19 86.63c-6.66,1.15 -15.15,-0.24 -21.27,-7.48 -11.81,-13.97 -1.49,-36.91 9.18,-48.58 7.29,-7.97 16.79,-14.42 24.27,-16.8 35.9,-11.42 77.82,29.87 66.23,59.3 -7.69,19.51 -23.5,16 -38.48,8.95 -20.52,-9.66 -25.03,2.04 -39.93,4.61z"/>
  
  {isStat ? 
 <g id="_2087790228736">
  <path className={classes.fil6} d="M1471.82 262.18l1211.34 0c14.81,0 26.89,12.08 26.89,26.89l0 224.52c0,14.81 -12.08,26.89 -26.89,26.89l-1211.34 0c-14.81,0 -26.89,-12.08 -26.89,-26.89l0 -224.52c0,-14.81 12.08,-26.89 26.89,-26.89z"/>
  <path className={classes.fil7} d="M1483.79 316.96l140.5 0c7.4,0 13.44,6.04 13.44,13.44l0 141.84c0,7.4 -6.04,13.44 -13.44,13.44l-140.5 0c-7.4,0 -13.44,-6.04 -13.44,-13.44l0 -141.84c0,-7.4 6.04,-13.44 13.44,-13.44z"/>
  <path className={classes.fil8} d="M1483.79 327.05c-1.84,0 -3.36,1.52 -3.36,3.36l0 141.84c0,1.84 1.52,3.36 3.36,3.36l140.5 0c1.84,0 3.36,-1.52 3.36,-3.36l0 -141.84c0,-1.84 -1.52,-3.36 -3.36,-3.36l-140.5 0z"/>
  <path className={classes.fil9} d="M2044.39 330.98c6.81,0 12.2,2.2 16.2,6.6 3.99,4.4 5.99,10.36 5.99,17.89 0,7.53 -1.99,13.48 -5.98,17.87 -3.98,4.39 -9.39,6.58 -16.21,6.58 -6.82,0 -12.23,-2.18 -16.21,-6.58 -3.99,-4.39 -5.97,-10.34 -5.97,-17.87 0,-7.53 1.98,-13.49 5.97,-17.89 3.98,-4.4 9.39,-6.6 16.21,-6.6zm0 6.46c-4.5,0 -8.08,1.62 -10.71,4.86 -2.64,3.24 -3.95,7.63 -3.95,13.16 0,5.51 1.31,9.89 3.95,13.13 2.63,3.24 6.21,4.85 10.71,4.85 4.48,0 8.05,-1.61 10.69,-4.85 2.63,-3.24 3.96,-7.62 3.96,-13.13 0,-5.53 -1.32,-9.93 -3.96,-13.16 -2.64,-3.24 -6.21,-4.86 -10.69,-4.86zm45.01 42.38c-5.58,-0.01 -9.83,-1.83 -12.74,-5.46 -2.91,-3.63 -4.37,-8.97 -4.37,-16.01 0,-6.72 0.67,-12.15 2,-16.27 1.33,-4.12 3.41,-7.18 6.21,-9.18 2.8,-1.99 6.5,-3.07 11.09,-3.25l3.08 -0.1c1.88,-0.09 3.7,-0.29 5.43,-0.63 1.74,-0.33 3.04,-0.71 3.89,-1.14l0 5.9c-0.5,0.44 -1.59,0.85 -3.28,1.23 -1.68,0.38 -3.56,0.62 -5.65,0.71l-3.05 0.1c-2.41,0.09 -4.43,0.43 -6.04,1.02 -1.62,0.58 -2.96,1.52 -4.02,2.8 -1.06,1.28 -1.88,2.81 -2.48,4.58 -0.59,1.77 -1.06,4.01 -1.41,6.73l0.26 0c1.14,-2.11 2.76,-3.72 4.86,-4.83 2.09,-1.12 4.55,-1.68 7.35,-1.68 4.82,0 8.65,1.57 11.51,4.68 2.86,3.11 4.28,7.33 4.28,12.61 0,5.6 -1.51,10.03 -4.54,13.28 -3.04,3.25 -7.17,4.87 -12.39,4.88zm-0.07 -6.02c3.08,0 5.48,-1.04 7.18,-3.15 1.71,-2.09 2.57,-5.07 2.57,-8.93 0,-3.65 -0.85,-6.49 -2.57,-8.5 -1.7,-2 -4.1,-3.01 -7.18,-3.01 -3.09,0 -5.49,1.01 -7.19,3.01 -1.7,2.02 -2.55,4.85 -2.55,8.5 0,3.85 0.84,6.83 2.54,8.93 1.69,2.11 4.09,3.15 7.2,3.15zm74.67 14.68l-6.53 0 0 -9.35 -44.75 0 0 -35.65 7.06 0 0 30 12.31 0 0 -30 7.06 0 0 30 12.31 0 0 -30 7.02 0 0 30 5.51 0 0 15zm19.85 -39.65c-2.57,0 -4.69,0.85 -6.39,2.55 -1.69,1.71 -2.64,3.93 -2.85,6.67l18.09 0c-0.09,-2.78 -0.94,-5.01 -2.57,-6.7 -1.61,-1.68 -3.72,-2.52 -6.3,-2.52zm8.83 19.85l6.79 0c-0.5,3.19 -2.17,5.8 -5.02,7.83 -2.85,2.03 -6.27,3.04 -10.27,3.04 -5.17,0 -9.25,-1.62 -12.26,-4.87 -3.01,-3.25 -4.51,-7.66 -4.51,-13.24 0,-5.58 1.5,-10.05 4.49,-13.39 3,-3.35 6.99,-5.03 11.99,-5.03 4.9,0 8.78,1.58 11.65,4.75 2.87,3.16 4.29,7.44 4.29,12.85l0 2.49 -25.23 0 0 0.43c0,3.09 0.89,5.57 2.66,7.44 1.77,1.87 4.12,2.8 7.06,2.8 2.07,0 3.86,-0.46 5.38,-1.38 1.51,-0.92 2.51,-2.15 2.99,-3.71zm37.22 10.44l0 -15.63 -16.72 0 0 15.63 -7.06 0 0 -35.65 7.06 0 0 14.39 16.72 0 0 -14.39 7.05 0 0 35.65 -7.05 0zm21.99 0l-7 0 0 -35.65 7 0 0 25.21 0.26 0 17.03 -25.21 7 0 0 35.65 -7 0 0 -25.31 -0.26 0 -17.03 25.31zm47.1 -30.29c-2.57,0 -4.69,0.85 -6.39,2.55 -1.69,1.71 -2.64,3.93 -2.85,6.67l18.09 0c-0.09,-2.78 -0.94,-5.01 -2.57,-6.7 -1.61,-1.68 -3.72,-2.52 -6.3,-2.52zm8.83 19.85l6.79 0c-0.5,3.19 -2.17,5.8 -5.02,7.83 -2.85,2.03 -6.27,3.04 -10.27,3.04 -5.17,0 -9.25,-1.62 -12.26,-4.87 -3.01,-3.25 -4.51,-7.66 -4.51,-13.24 0,-5.58 1.5,-10.05 4.49,-13.39 3,-3.35 6.99,-5.03 11.99,-5.03 4.9,0 8.78,1.58 11.65,4.75 2.87,3.16 4.29,7.44 4.29,12.85l0 2.49 -25.23 0 0 0.43c0,3.09 0.89,5.57 2.66,7.44 1.77,1.87 4.12,2.8 7.06,2.8 2.07,0 3.86,-0.46 5.38,-1.38 1.51,-0.92 2.51,-2.15 2.99,-3.71z"/>
  <polygon className={classes.fil10} points="1751.47,421.83 2585.71,421.83 2585.71,478.97 1751.47,478.97 "/>
  <polygon className={classes.fil11} style={{color: contactColor}}  points={`1751.47,421.83 ${1751.47+((2585.71-1751.47)/100*contactProgress)},421.83 ${1751.47+((2585.71-1751.47)/100*contactProgress)},478.97 1751.47,478.97`}/>
  <path className={classes.fil6} d="M173.09 262.18l1211.34 0c14.81,0 26.89,12.08 26.89,26.89l0 224.52c0,14.81 -12.08,26.89 -26.89,26.89l-1211.34 0c-14.81,0 -26.89,-12.08 -26.89,-26.89l0 -224.52c0,-14.81 12.08,-26.89 26.89,-26.89z"/>
  <path className={classes.fil7} d="M185.06 316.96l140.5 0c7.4,0 13.44,6.04 13.44,13.44l0 141.84c0,7.4 -6.04,13.44 -13.44,13.44l-140.5 0c-7.4,0 -13.44,-6.04 -13.44,-13.44l0 -141.84c0,-7.4 6.04,-13.44 13.44,-13.44z"/>
  <path className={classes.fil8} d="M185.06 327.05c-1.84,0 -3.36,1.52 -3.36,3.36l0 141.84c0,1.84 1.52,3.36 3.36,3.36l140.5 0c1.84,0 3.36,-1.52 3.36,-3.36l0 -141.84c0,-1.84 -1.52,-3.36 -3.36,-3.36l-140.5 0z"/>
  <polygon className={classes.fil10} points="452.74,421.83 1286.98,421.83 1286.98,478.97 452.74,478.97 "/>
  <polygon className={classes.fil11}  style={{color: feedColor}} points={`452.74,421.83 ${452.74+((1286.98-452.74)/100*feedProgress)},421.83 ${452.74+((1286.98-452.74)/100*feedProgress)},478.97 452.74,478.97`}/>
  <path className={classes.fil6} d="M1471.82 574.09l1211.34 0c14.81,0 26.89,12.08 26.89,26.89l0 224.52c0,14.81 -12.08,26.89 -26.89,26.89l-1211.34 0c-14.81,0 -26.89,-12.08 -26.89,-26.89l0 -224.52c0,-14.81 12.08,-26.89 26.89,-26.89z"/>
  <path className={classes.fil6} d="M1471.82 886l1211.34 0c14.81,0 26.89,12.08 26.89,26.89l0 224.52c0,14.81 -12.08,26.89 -26.89,26.89l-1211.34 0c-14.81,0 -26.89,-12.08 -26.89,-26.89l0 -224.52c0,-14.81 12.08,-26.89 26.89,-26.89z"/>
  <path className={classes.fil7} d="M1483.79 628.87l140.5 0c7.4,0 13.44,6.04 13.44,13.44l0 141.84c0,7.4 -6.04,13.44 -13.44,13.44l-140.5 0c-7.4,0 -13.44,-6.04 -13.44,-13.44l0 -141.84c0,-7.4 6.04,-13.44 13.44,-13.44z"/>
  <path className={classes.fil7} d="M1483.79 940.78l140.5 0c7.4,0 13.44,6.04 13.44,13.44l0 141.84c0,7.4 -6.04,13.44 -13.44,13.44l-140.5 0c-7.4,0 -13.44,-6.04 -13.44,-13.44l0 -141.84c0,-7.4 6.04,-13.44 13.44,-13.44z"/>
  <path className={classes.fil8} d="M1483.79 638.96c-1.84,0 -3.36,1.52 -3.36,3.36l0 141.84c0,1.84 1.52,3.36 3.36,3.36l140.5 0c1.84,0 3.36,-1.52 3.36,-3.36l0 -141.84c0,-1.84 -1.52,-3.36 -3.36,-3.36l-140.5 0z"/>
  <path className={classes.fil8} d="M1483.79 950.87c-1.84,0 -3.36,1.52 -3.36,3.36l0 141.84c0,1.84 1.52,3.36 3.36,3.36l140.5 0c1.84,0 3.36,-1.52 3.36,-3.36l0 -141.84c0,-1.84 -1.52,-3.36 -3.36,-3.36l-140.5 0z"/>
  <polygon className={classes.fil10} points="1751.47,733.74 2585.71,733.74 2585.71,790.88 1751.47,790.88 "/>
  <polygon className={classes.fil10} points="1751.47,1045.65 2585.71,1045.65 2585.71,1102.79 1751.47,1102.79 "/>
  <polygon className={classes.fil11} style={{color: hygeineColor}}  points={`1751.47,733.74 ${1751.47+((2585.71-1751.47)/100*hygeineProgress)},733.74 ${1751.47+((2585.71-1751.47)/100*hygeineProgress)},790.88 1751.47,790.88`}/>
  <polygon className={classes.fil11} style={{color: partyColor}} points={`1751.47,1045.65 ${1751.47+((2585.71-1751.47)/100*partyProgress)},1045.65 ${1751.47+((2585.71-1751.47)/100*partyProgress)},1102.79 1751.47,1102.79`}/>
  <path className={classes.fil6} d="M173.09 574.09l1211.34 0c14.81,0 26.89,12.08 26.89,26.89l0 224.52c0,14.81 -12.08,26.89 -26.89,26.89l-1211.34 0c-14.81,0 -26.89,-12.08 -26.89,-26.89l0 -224.52c0,-14.81 12.08,-26.89 26.89,-26.89z"/>
  <path className={classes.fil6} d="M173.09 886l1211.34 0c14.81,0 26.89,12.08 26.89,26.89l0 224.52c0,14.81 -12.08,26.89 -26.89,26.89l-1211.34 0c-14.81,0 -26.89,-12.08 -26.89,-26.89l0 -224.52c0,-14.81 12.08,-26.89 26.89,-26.89z"/>
  <path className={classes.fil7} d="M185.06 628.87l140.5 0c7.4,0 13.44,6.04 13.44,13.44l0 141.84c0,7.4 -6.04,13.44 -13.44,13.44l-140.5 0c-7.4,0 -13.44,-6.04 -13.44,-13.44l0 -141.84c0,-7.4 6.04,-13.44 13.44,-13.44z"/>
  <path className={classes.fil7} d="M185.06 940.78l140.5 0c7.4,0 13.44,6.04 13.44,13.44l0 141.84c0,7.4 -6.04,13.44 -13.44,13.44l-140.5 0c-7.4,0 -13.44,-6.04 -13.44,-13.44l0 -141.84c0,-7.4 6.04,-13.44 13.44,-13.44z"/>
  <path className={classes.fil8} d="M185.06 638.96c-1.84,0 -3.36,1.52 -3.36,3.36l0 141.84c0,1.84 1.52,3.36 3.36,3.36l140.5 0c1.84,0 3.36,-1.52 3.36,-3.36l0 -141.84c0,-1.84 -1.52,-3.36 -3.36,-3.36l-140.5 0z"/>
  <path className={classes.fil8} d="M185.06 950.87c-1.84,0 -3.36,1.52 -3.36,3.36l0 141.84c0,1.84 1.52,3.36 3.36,3.36l140.5 0c1.84,0 3.36,-1.52 3.36,-3.36l0 -141.84c0,-1.84 -1.52,-3.36 -3.36,-3.36l-140.5 0z"/>
  <polygon className={classes.fil10} points="452.74,733.74 1286.98,733.74 1286.98,790.88 452.74,790.88 "/>
  <polygon className={classes.fil10} points="452.74,1045.65 1286.98,1045.65 1286.98,1102.79 452.74,1102.79 "/>
  <polygon className={classes.fil11} style={{color: medicalColor}} points={`452.74,733.74 ${452.74+((1286.98-452.74)/100*medicalProgress)},733.74 ${452.74+((1286.98-452.74)/100*medicalProgress)},790.88 452.74,790.88`}/>
  <polygon className={classes.fil11} style={{color: careColor}} points={`452.74,1045.65 ${452.74+((1286.98-452.74)/100*careProgress)},1045.65 ${452.74+((1286.98-452.74)/100*careProgress)},1102.79 452.74,1102.79`}/>
  <path className={classes.fil9} d="M776.76 379.14l-7.28 0 0 -40.96 -23.7 0 0 40.96 -7.38 0 0 -47.37 38.36 0 0 47.37zm15.8 0l-7 0 0 -35.65 7 0 0 25.21 0.26 0 17.03 -25.21 7 0 0 35.65 -7 0 0 -25.31 -0.26 0 -17.03 25.31zm59.21 -35.65l0 5.65 -11.26 0 0 30 -7.02 0 0 -30 -11.26 0 0 -5.65 29.54 0zm16.91 30.33c2.64,0 4.86,-0.76 6.63,-2.28 1.77,-1.52 2.66,-3.45 2.66,-5.79l0 -2.79 -8.66 0.58c-4.93,0.31 -7.39,2.06 -7.39,5.26 0,1.53 0.62,2.76 1.85,3.66 1.22,0.91 2.86,1.36 4.92,1.36zm-1.91 5.68c-3.56,0 -6.46,-0.96 -8.69,-2.9 -2.24,-1.94 -3.35,-4.49 -3.35,-7.66 0,-3.1 1.17,-5.55 3.5,-7.32 2.33,-1.78 5.7,-2.8 10.13,-3.09l9.61 -0.56 0 -2.76c0,-2.03 -0.65,-3.6 -1.95,-4.67 -1.3,-1.09 -3.15,-1.62 -5.53,-1.62 -1.93,0 -3.55,0.46 -4.87,1.38 -1.32,0.92 -2.14,2.15 -2.44,3.71l-6.67 0c0.11,-3.15 1.5,-5.77 4.17,-7.84 2.67,-2.08 6,-3.13 10.02,-3.13 4.35,0 7.82,1.06 10.42,3.18 2.59,2.13 3.89,4.95 3.89,8.47l0 24.46 -6.79 0 0 -5.94 -0.17 0c-0.99,1.93 -2.5,3.45 -4.53,4.59 -2.04,1.13 -4.28,1.7 -6.73,1.7zm49.48 -0.36l0 -15.63 -16.72 0 0 15.63 -7.06 0 0 -35.65 7.06 0 0 14.39 16.72 0 0 -14.39 7.05 0 0 35.65 -7.05 0zm21.99 0l-7 0 0 -35.65 7 0 0 25.21 0.26 0 17.03 -25.21 7 0 0 35.65 -7 0 0 -25.31 -0.26 0 -17.03 25.31zm47.1 -30.29c-2.57,0 -4.69,0.85 -6.39,2.55 -1.69,1.71 -2.64,3.93 -2.85,6.67l18.09 0c-0.09,-2.78 -0.94,-5.01 -2.57,-6.7 -1.61,-1.68 -3.72,-2.52 -6.3,-2.52zm8.83 19.85l6.79 0c-0.5,3.19 -2.17,5.8 -5.02,7.83 -2.85,2.03 -6.27,3.04 -10.27,3.04 -5.17,0 -9.25,-1.62 -12.26,-4.87 -3.01,-3.25 -4.51,-7.66 -4.51,-13.24 0,-5.58 1.5,-10.05 4.49,-13.39 3,-3.35 6.99,-5.03 11.99,-5.03 4.9,0 8.78,1.58 11.65,4.75 2.87,3.16 4.29,7.44 4.29,12.85l0 2.49 -25.23 0 0 0.43c0,3.09 0.89,5.57 2.66,7.44 1.77,1.87 4.12,2.8 7.06,2.8 2.07,0 3.86,-0.46 5.38,-1.38 1.51,-0.92 2.51,-2.15 2.99,-3.71z"/>
  <path className={classes.fil9} d="M577.83 674.6l0 6.36 -30.07 0 0 -47.37 30.07 0 0 6.34 -22.72 0 0 13.85 21.5 0 0 6.11 -21.5 0 0 14.71 22.72 0zm37.95 -17.93l-6.87 0c-0.46,-1.75 -1.41,-3.16 -2.86,-4.21 -1.45,-1.06 -3.26,-1.6 -5.44,-1.6 -2.89,0 -5.2,1.12 -6.95,3.35 -1.74,2.24 -2.61,5.21 -2.61,8.93 0,3.81 0.88,6.81 2.63,9 1.75,2.18 4.07,3.28 6.96,3.28 2.16,0 3.97,-0.49 5.4,-1.48 1.43,-0.99 2.41,-2.4 2.94,-4.24l6.86 0c-0.54,3.53 -2.18,6.35 -4.93,8.48 -2.76,2.14 -6.19,3.2 -10.3,3.2 -5.08,0 -9.13,-1.64 -12.18,-4.91 -3.04,-3.27 -4.56,-7.72 -4.56,-13.34 0,-5.53 1.52,-9.96 4.56,-13.29 3.05,-3.33 7.08,-5 12.11,-5 4.2,0 7.66,1.12 10.39,3.37 2.73,2.24 4.35,5.05 4.85,8.45zm32.46 -11.36l0 5.65 -11.26 0 0 30 -7.02 0 0 -30 -11.26 0 0 -5.65 29.54 0zm19.66 5.36c-2.57,0 -4.69,0.85 -6.39,2.55 -1.69,1.71 -2.64,3.93 -2.85,6.67l18.09 0c-0.09,-2.78 -0.94,-5.01 -2.57,-6.7 -1.61,-1.68 -3.72,-2.52 -6.3,-2.52zm8.83 19.85l6.79 0c-0.5,3.19 -2.17,5.8 -5.02,7.83 -2.85,2.03 -6.27,3.04 -10.27,3.04 -5.17,0 -9.25,-1.62 -12.26,-4.87 -3.01,-3.25 -4.51,-7.66 -4.51,-13.24 0,-5.58 1.5,-10.05 4.49,-13.39 3,-3.35 6.99,-5.03 11.99,-5.03 4.9,0 8.78,1.58 11.65,4.75 2.87,3.16 4.29,7.44 4.29,12.85l0 2.49 -25.23 0 0 0.43c0,3.09 0.89,5.57 2.66,7.44 1.77,1.87 4.12,2.8 7.06,2.8 2.07,0 3.86,-0.46 5.38,-1.38 1.51,-0.92 2.51,-2.15 2.99,-3.71zm43.78 -13.85l-6.87 0c-0.46,-1.75 -1.41,-3.16 -2.86,-4.21 -1.45,-1.06 -3.26,-1.6 -5.44,-1.6 -2.89,0 -5.2,1.12 -6.95,3.35 -1.74,2.24 -2.61,5.21 -2.61,8.93 0,3.81 0.88,6.81 2.63,9 1.75,2.18 4.07,3.28 6.96,3.28 2.16,0 3.97,-0.49 5.4,-1.48 1.43,-0.99 2.41,-2.4 2.94,-4.24l6.86 0c-0.54,3.53 -2.18,6.35 -4.93,8.48 -2.76,2.14 -6.19,3.2 -10.3,3.2 -5.08,0 -9.13,-1.64 -12.18,-4.91 -3.04,-3.27 -4.56,-7.72 -4.56,-13.34 0,-5.53 1.52,-9.96 4.56,-13.29 3.05,-3.33 7.08,-5 12.11,-5 4.2,0 7.66,1.12 10.39,3.37 2.73,2.24 4.35,5.05 4.85,8.45zm32.46 -11.36l0 5.65 -11.26 0 0 30 -7.02 0 0 -30 -11.26 0 0 -5.65 29.54 0zm20.22 5.22l-7.88 0 0 9.46 7.12 0c4.18,0 6.27,-1.59 6.27,-4.76 0,-1.51 -0.47,-2.67 -1.41,-3.47 -0.94,-0.82 -2.31,-1.22 -4.1,-1.22zm-0.27 14.51l-7.61 0 0 10.67 8.49 0c2.08,0 3.66,-0.45 4.76,-1.35 1.1,-0.9 1.65,-2.21 1.65,-3.93 0,-3.6 -2.43,-5.39 -7.29,-5.39zm-14.61 15.92l0 -35.65 16.26 0c3.43,0 6.14,0.82 8.12,2.43 1.98,1.62 2.97,3.83 2.97,6.63 0,1.86 -0.58,3.53 -1.74,5.01 -1.16,1.48 -2.6,2.37 -4.3,2.7l0 0.27c2.27,0.3 4.11,1.22 5.51,2.73 1.4,1.52 2.11,3.39 2.11,5.6 0,3.15 -1.13,5.65 -3.37,7.49 -2.24,1.85 -5.29,2.78 -9.14,2.78l-16.41 0zm50.33 -30.29c-2.57,0 -4.69,0.85 -6.39,2.55 -1.69,1.71 -2.64,3.93 -2.85,6.67l18.09 0c-0.09,-2.78 -0.94,-5.01 -2.57,-6.7 -1.61,-1.68 -3.72,-2.52 -6.3,-2.52zm8.83 19.85l6.79 0c-0.5,3.19 -2.17,5.8 -5.02,7.83 -2.85,2.03 -6.27,3.04 -10.27,3.04 -5.17,0 -9.25,-1.62 -12.26,-4.87 -3.01,-3.25 -4.51,-7.66 -4.51,-13.24 0,-5.58 1.5,-10.05 4.49,-13.39 3,-3.35 6.99,-5.03 11.99,-5.03 4.9,0 8.78,1.58 11.65,4.75 2.87,3.16 4.29,7.44 4.29,12.85l0 2.49 -25.23 0 0 0.43c0,3.09 0.89,5.57 2.66,7.44 1.77,1.87 4.12,2.8 7.06,2.8 2.07,0 3.86,-0.46 5.38,-1.38 1.51,-0.92 2.51,-2.15 2.99,-3.71zm37.22 10.44l0 -15.63 -16.72 0 0 15.63 -7.06 0 0 -35.65 7.06 0 0 14.39 16.72 0 0 -14.39 7.05 0 0 35.65 -7.05 0zm38.76 0l0 -15.63 -16.72 0 0 15.63 -7.06 0 0 -35.65 7.06 0 0 14.39 16.72 0 0 -14.39 7.05 0 0 35.65 -7.05 0zm27.37 -5.32c2.64,0 4.86,-0.76 6.63,-2.28 1.77,-1.52 2.66,-3.45 2.66,-5.79l0 -2.79 -8.66 0.58c-4.93,0.31 -7.39,2.06 -7.39,5.26 0,1.53 0.62,2.76 1.85,3.66 1.22,0.91 2.86,1.36 4.92,1.36zm-1.91 5.68c-3.56,0 -6.46,-0.96 -8.69,-2.9 -2.24,-1.94 -3.35,-4.49 -3.35,-7.66 0,-3.1 1.17,-5.55 3.5,-7.32 2.33,-1.78 5.7,-2.8 10.13,-3.09l9.61 -0.56 0 -2.76c0,-2.03 -0.65,-3.6 -1.95,-4.67 -1.3,-1.09 -3.15,-1.62 -5.53,-1.62 -1.93,0 -3.55,0.46 -4.87,1.38 -1.32,0.92 -2.14,2.15 -2.44,3.71l-6.67 0c0.11,-3.15 1.5,-5.77 4.17,-7.84 2.67,-2.08 6,-3.13 10.02,-3.13 4.35,0 7.82,1.06 10.42,3.18 2.59,2.13 3.89,4.95 3.89,8.47l0 24.46 -6.79 0 0 -5.94 -0.17 0c-0.99,1.93 -2.5,3.45 -4.53,4.59 -2.04,1.13 -4.28,1.7 -6.73,1.7zm39.14 -18.15l6.53 0 0 -12.25 -6.53 0c-2.15,0 -3.85,0.57 -5.11,1.69 -1.26,1.13 -1.88,2.67 -1.88,4.62 0,1.75 0.64,3.17 1.92,4.28 1.28,1.11 2.97,1.66 5.08,1.66zm6.53 17.79l0 -12.35 -5.61 0 -8.67 12.35 -8.03 0 9.75 -13.52c-2.5,-0.74 -4.45,-2.01 -5.86,-3.78 -1.41,-1.77 -2.12,-3.9 -2.12,-6.36 0,-3.7 1.23,-6.62 3.71,-8.77 2.48,-2.14 5.79,-3.22 9.97,-3.22l13.83 0 0 35.65 -6.96 0zm54.16 0l0 -15.63 -16.72 0 0 15.63 -7.06 0 0 -35.65 7.06 0 0 14.39 16.72 0 0 -14.39 7.05 0 0 35.65 -7.05 0zm18.57 12.96c-1.19,0 -2.15,-0.07 -2.89,-0.19l0 -5.78c0.44,0.11 1.2,0.17 2.26,0.17 1.71,0 3.06,-0.4 4.06,-1.2 1,-0.81 1.8,-2.14 2.41,-4.02l0.56 -1.84 -12.93 -35.75 7.64 0 9.17 29.15 0.16 0 9.17 -29.15 7.48 0 -13.37 37.29c-1.52,4.27 -3.28,7.23 -5.27,8.86 -1.98,1.65 -4.79,2.46 -8.45,2.46zm64.57 -31.84l15.39 18.88 -8.83 0 -13.33 -16.57 -0.26 0 0 16.57 -6.99 0 0 -16.57 -0.27 0 -13.32 16.57 -8.69 0 15.26 -18.78 -14.9 -16.87 8.5 0 13.15 15.33 0.27 0 0 -15.33 6.99 0 0 15.33 0.26 0 13.16 -15.33 8.44 0 -14.83 16.77zm43.78 13.23l0 -24.39 -12.57 0 -1.02 13.89c-0.33,4.71 -1.27,8.11 -2.82,10.24l0 0.26 16.41 0zm-20.51 15l-6.53 0 0 -15 2.88 0c2.36,-1.49 3.74,-5.09 4.15,-10.8l1.31 -19.2 25.73 0 0 30 5.58 0 0 15 -6.57 0 0 -9.35 -26.55 0 0 9.35zm50.51 -14.68c2.64,0 4.86,-0.76 6.63,-2.28 1.77,-1.52 2.66,-3.45 2.66,-5.79l0 -2.79 -8.66 0.58c-4.93,0.31 -7.39,2.06 -7.39,5.26 0,1.53 0.62,2.76 1.85,3.66 1.22,0.91 2.86,1.36 4.92,1.36zm-1.91 5.68c-3.56,0 -6.46,-0.96 -8.69,-2.9 -2.24,-1.94 -3.35,-4.49 -3.35,-7.66 0,-3.1 1.17,-5.55 3.5,-7.32 2.33,-1.78 5.7,-2.8 10.13,-3.09l9.61 -0.56 0 -2.76c0,-2.03 -0.65,-3.6 -1.95,-4.67 -1.3,-1.09 -3.15,-1.62 -5.53,-1.62 -1.93,0 -3.55,0.46 -4.87,1.38 -1.32,0.92 -2.14,2.15 -2.44,3.71l-6.67 0c0.11,-3.15 1.5,-5.77 4.17,-7.84 2.67,-2.08 6,-3.13 10.02,-3.13 4.35,0 7.82,1.06 10.42,3.18 2.59,2.13 3.89,4.95 3.89,8.47l0 24.46 -6.79 0 0 -5.94 -0.17 0c-0.99,1.93 -2.5,3.45 -4.53,4.59 -2.04,1.13 -4.28,1.7 -6.73,1.7z"/>
  <path className={classes.fil9} d="M756.02 968.31c0,4.29 -1.46,7.78 -4.35,10.45 -2.9,2.68 -6.66,4.02 -11.25,4.02l-18.02 0 0 -47.37 29.02 0 0 6.34 -21.67 0 0 12.14 10.5 0c4.65,0 8.42,1.33 11.36,4 2.93,2.68 4.4,6.14 4.4,10.41zm-26.26 8.24l8.79 0c3.17,0 5.62,-0.71 7.35,-2.13 1.74,-1.42 2.6,-3.46 2.6,-6.11 0,-2.64 -0.87,-4.68 -2.61,-6.12 -1.74,-1.43 -4.2,-2.15 -7.37,-2.15l-8.76 0 0 16.5zm61.33 1.75c-3.02,3.28 -7.13,4.92 -12.29,4.92 -5.17,0 -9.27,-1.64 -12.31,-4.92 -3.04,-3.28 -4.56,-7.73 -4.56,-13.33 0,-5.58 1.52,-10.02 4.58,-13.32 3.05,-3.31 7.15,-4.96 12.29,-4.96 5.14,0 9.23,1.65 12.28,4.94 3.04,3.29 4.56,7.74 4.56,13.34 0,5.6 -1.51,10.05 -4.55,13.33zm-19.38 -4.26c1.7,2.18 4.07,3.27 7.09,3.27 3.01,0 5.38,-1.09 7.07,-3.25 1.7,-2.17 2.54,-5.2 2.54,-9.1 0,-3.89 -0.84,-6.92 -2.54,-9.11 -1.69,-2.17 -4.05,-3.26 -7.07,-3.26 -3.02,0 -5.39,1.09 -7.09,3.28 -1.7,2.18 -2.56,5.21 -2.56,9.09 0,3.88 0.86,6.9 2.56,9.08zm54.09 3.1l0 -24.39 -12.57 0 -1.02 13.89c-0.33,4.71 -1.27,8.11 -2.82,10.24l0 0.26 16.41 0zm-20.51 15l-6.53 0 0 -15 2.88 0c2.36,-1.49 3.74,-5.09 4.15,-10.8l1.31 -19.2 25.73 0 0 30 5.58 0 0 15 -6.57 0 0 -9.35 -26.55 0 0 9.35zm56.51 -45.36c4.55,0 8.2,1.66 10.95,4.96 2.74,3.29 4.12,7.71 4.12,13.22 0,5.49 -1.37,9.89 -4.09,13.21 -2.72,3.32 -6.33,4.97 -10.81,4.97 -2.56,0 -4.82,-0.54 -6.77,-1.62 -1.95,-1.07 -3.45,-2.61 -4.53,-4.58l-0.13 0 0 17.5 -7.13 0 0 -47.3 6.87 0 0 5.92 0.16 0c1.01,-1.93 2.54,-3.45 4.58,-4.58 2.05,-1.13 4.3,-1.69 6.78,-1.69zm-1.8 30.33c2.89,0 5.21,-1.1 6.96,-3.32 1.75,-2.21 2.63,-5.15 2.63,-8.83 0,-3.68 -0.88,-6.62 -2.63,-8.83 -1.75,-2.21 -4.07,-3.32 -6.96,-3.32 -2.82,0 -5.11,1.12 -6.86,3.35 -1.76,2.23 -2.64,5.17 -2.67,8.79 0.02,3.65 0.91,6.6 2.64,8.82 1.74,2.22 4.03,3.33 6.88,3.33zm50.8 1.19c-3.02,3.28 -7.13,4.92 -12.29,4.92 -5.17,0 -9.27,-1.64 -12.31,-4.92 -3.04,-3.28 -4.56,-7.73 -4.56,-13.33 0,-5.58 1.52,-10.02 4.58,-13.32 3.05,-3.31 7.15,-4.96 12.29,-4.96 5.14,0 9.23,1.65 12.28,4.94 3.04,3.29 4.56,7.74 4.56,13.34 0,5.6 -1.51,10.05 -4.55,13.33zm-19.38 -4.26c1.7,2.18 4.07,3.27 7.09,3.27 3.01,0 5.38,-1.09 7.07,-3.25 1.7,-2.17 2.54,-5.2 2.54,-9.1 0,-3.89 -0.84,-6.92 -2.54,-9.11 -1.69,-2.17 -4.05,-3.26 -7.07,-3.26 -3.02,0 -5.39,1.09 -7.09,3.28 -1.7,2.18 -2.56,5.21 -2.56,9.09 0,3.88 0.86,6.9 2.56,9.08zm60.69 -15.54l-6.87 0c-0.46,-1.75 -1.41,-3.16 -2.86,-4.21 -1.45,-1.06 -3.26,-1.6 -5.44,-1.6 -2.89,0 -5.2,1.12 -6.95,3.35 -1.74,2.24 -2.61,5.21 -2.61,8.93 0,3.81 0.88,6.81 2.63,9 1.75,2.18 4.07,3.28 6.96,3.28 2.16,0 3.97,-0.49 5.4,-1.48 1.43,-0.99 2.41,-2.4 2.94,-4.24l6.86 0c-0.54,3.53 -2.18,6.35 -4.93,8.48 -2.76,2.14 -6.19,3.2 -10.3,3.2 -5.08,0 -9.13,-1.64 -12.18,-4.91 -3.04,-3.27 -4.56,-7.72 -4.56,-13.34 0,-5.53 1.52,-9.96 4.56,-13.29 3.05,-3.33 7.08,-5 12.11,-5 4.2,0 7.66,1.12 10.39,3.37 2.73,2.24 4.35,5.05 4.85,8.45zm32.46 -11.36l0 5.65 -11.26 0 0 30 -7.02 0 0 -30 -11.26 0 0 -5.65 29.54 0zm18.64 16.65l-6.24 0 0 13.39 6.24 0c2.14,0 3.85,-0.62 5.14,-1.84 1.28,-1.22 1.92,-2.85 1.92,-4.86 0,-2.03 -0.64,-3.65 -1.92,-4.87 -1.29,-1.21 -3,-1.82 -5.14,-1.82zm-13.3 19l0 -35.65 7.06 0 0 11.07 6.8 0c4.13,0 7.43,1.1 9.88,3.32 2.44,2.21 3.67,5.19 3.67,8.95 0,3.77 -1.23,6.76 -3.67,8.99 -2.45,2.22 -5.75,3.33 -9.88,3.33l-13.86 0z"/>
  <path className={classes.fil9} d="M2054.28 680.96l-7.38 0 0 -47.37 28.95 0 0 6.41 -21.57 0 0 40.96zm30.17 0l-7 0 0 -35.65 7 0 0 25.21 0.26 0 17.03 -25.21 7 0 0 35.65 -7 0 0 -25.31 -0.26 0 -17.03 25.31zm55.8 -30l-16.48 0 0 30 -7.06 0 0 -35.65 23.54 0 0 5.65zm13.2 30l-7 0 0 -35.65 7 0 0 25.21 0.26 0 17.03 -25.21 7 0 0 35.65 -7 0 0 -25.31 -0.26 0 -17.03 25.31zm47.1 -30.29c-2.57,0 -4.69,0.85 -6.39,2.55 -1.69,1.71 -2.64,3.93 -2.85,6.67l18.09 0c-0.09,-2.78 -0.94,-5.01 -2.57,-6.7 -1.61,-1.68 -3.72,-2.52 -6.3,-2.52zm8.83 19.85l6.79 0c-0.5,3.19 -2.17,5.8 -5.02,7.83 -2.85,2.03 -6.27,3.04 -10.27,3.04 -5.17,0 -9.25,-1.62 -12.26,-4.87 -3.01,-3.25 -4.51,-7.66 -4.51,-13.24 0,-5.58 1.5,-10.05 4.49,-13.39 3,-3.35 6.99,-5.03 11.99,-5.03 4.9,0 8.78,1.58 11.65,4.75 2.87,3.16 4.29,7.44 4.29,12.85l0 2.49 -25.23 0 0 0.43c0,3.09 0.89,5.57 2.66,7.44 1.77,1.87 4.12,2.8 7.06,2.8 2.07,0 3.86,-0.46 5.38,-1.38 1.51,-0.92 2.51,-2.15 2.99,-3.71zm37.22 10.44l0 -15.63 -16.72 0 0 15.63 -7.06 0 0 -35.65 7.06 0 0 14.39 16.72 0 0 -14.39 7.05 0 0 35.65 -7.05 0zm27.37 -5.32c2.64,0 4.86,-0.76 6.63,-2.28 1.77,-1.52 2.66,-3.45 2.66,-5.79l0 -2.79 -8.66 0.58c-4.93,0.31 -7.39,2.06 -7.39,5.26 0,1.53 0.62,2.76 1.85,3.66 1.22,0.91 2.86,1.36 4.92,1.36zm-1.91 5.68c-3.56,0 -6.46,-0.96 -8.69,-2.9 -2.24,-1.94 -3.35,-4.49 -3.35,-7.66 0,-3.1 1.17,-5.55 3.5,-7.32 2.33,-1.78 5.7,-2.8 10.13,-3.09l9.61 -0.56 0 -2.76c0,-2.03 -0.65,-3.6 -1.95,-4.67 -1.3,-1.09 -3.15,-1.62 -5.53,-1.62 -1.93,0 -3.55,0.46 -4.87,1.38 -1.32,0.92 -2.14,2.15 -2.44,3.71l-6.67 0c0.11,-3.15 1.5,-5.77 4.17,-7.84 2.67,-2.08 6,-3.13 10.02,-3.13 4.35,0 7.82,1.06 10.42,3.18 2.59,2.13 3.89,4.95 3.89,8.47l0 24.46 -6.79 0 0 -5.94 -0.17 0c-0.99,1.93 -2.5,3.45 -4.53,4.59 -2.04,1.13 -4.28,1.7 -6.73,1.7z"/>
  <path className={classes.fil9} d="M2090.46 958.19c-0.18,2.94 -0.49,5.3 -0.95,7.1 -0.47,1.81 -1.23,3.34 -2.31,4.58l0 0.27 21.67 0 0 -34.66 -16.97 0 -1.43 22.71zm-8.44 18.32l0 9.35 -6.77 0 0 -15.72 3.45 0c1.61,-0.94 2.79,-2.4 3.53,-4.37 0.73,-1.97 1.2,-4.6 1.39,-7.91l1.74 -28.73 30.86 0 0 41.01 5.92 0 0 15.72 -6.73 0 0 -9.35 -33.38 0zm73.37 -4.49c-3.02,3.28 -7.13,4.92 -12.29,4.92 -5.17,0 -9.27,-1.64 -12.31,-4.92 -3.04,-3.28 -4.56,-7.73 -4.56,-13.33 0,-5.58 1.52,-10.02 4.58,-13.32 3.05,-3.31 7.15,-4.96 12.29,-4.96 5.14,0 9.23,1.65 12.28,4.94 3.04,3.29 4.56,7.74 4.56,13.34 0,5.6 -1.51,10.05 -4.55,13.33zm-19.38 -4.26c1.7,2.18 4.07,3.27 7.09,3.27 3.01,0 5.38,-1.09 7.07,-3.25 1.7,-2.17 2.54,-5.2 2.54,-9.1 0,-3.89 -0.84,-6.92 -2.54,-9.11 -1.69,-2.17 -4.05,-3.26 -7.07,-3.26 -3.02,0 -5.39,1.09 -7.09,3.28 -1.7,2.18 -2.56,5.21 -2.56,9.09 0,3.88 0.86,6.9 2.56,9.08zm60.69 -15.54l-6.87 0c-0.46,-1.75 -1.41,-3.16 -2.86,-4.21 -1.45,-1.06 -3.26,-1.6 -5.44,-1.6 -2.89,0 -5.2,1.12 -6.95,3.35 -1.74,2.24 -2.61,5.21 -2.61,8.93 0,3.81 0.88,6.81 2.63,9 1.75,2.18 4.07,3.28 6.96,3.28 2.16,0 3.97,-0.49 5.4,-1.48 1.43,-0.99 2.41,-2.4 2.94,-4.24l6.86 0c-0.54,3.53 -2.18,6.35 -4.93,8.48 -2.76,2.14 -6.19,3.2 -10.3,3.2 -5.08,0 -9.13,-1.64 -12.18,-4.91 -3.04,-3.27 -4.56,-7.72 -4.56,-13.34 0,-5.53 1.52,-9.96 4.56,-13.29 3.05,-3.33 7.08,-5 12.11,-5 4.2,0 7.66,1.12 10.39,3.37 2.73,2.24 4.35,5.05 4.85,8.45zm9.61 37.25c-1.19,0 -2.15,-0.07 -2.89,-0.19l0 -5.78c0.44,0.11 1.2,0.17 2.26,0.17 1.71,0 3.06,-0.4 4.06,-1.2 1,-0.81 1.8,-2.14 2.41,-4.02l0.56 -1.84 -12.93 -35.75 7.64 0 9.17 29.15 0.16 0 9.17 -29.15 7.48 0 -13.37 37.29c-1.52,4.27 -3.28,7.23 -5.27,8.86 -1.98,1.65 -4.79,2.46 -8.45,2.46zm55.61 -42.97l-16.48 0 0 30 -7.06 0 0 -35.65 23.54 0 0 5.65z"/>
 </g>

  : ""}

 </g>
 
    </svg>

    </div>
  );
};

export default RightBarMenu;
