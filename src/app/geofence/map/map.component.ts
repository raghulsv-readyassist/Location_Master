import { Component,OnInit} from '@angular/core';
import { MapService } from 'src/app/shared/map.service';
import { ThrowStmt } from '@angular/compiler';
import { JsonPipe } from '@angular/common';
declare const google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent  {
  
public coordsval;

  constructor(public service:MapService) { }
  
  
  
  // parentMessage = "message from parent"
  ngOnInit() {
    // this.service.changeMessage(this.testcoords);
    
  }
  newMessage() {
    
    
  }
  
  center: any = {
    lat: 11.203388,
    lng: 77.820029
  };
  map: google.maps.Map

  onMapReady(map: google.maps.Map) {
    this.map = map;
    this.initDrawingManager(map);
    
    
  }

  initDrawingManager(map: any) {
    const options = {
      drawingControl: true,
      drawingControlOptions: {
        drawingModes: ["polygon"]
      },
      
      polygonOptions: {
        draggable: true,
        editable: true
      },
      drawingMode: google.maps.drawing.OverlayType.POLYGON
    };

    const drawingManager = new google.maps.drawing.DrawingManager(options);
    
    drawingManager.setMap(map);
    
   
 
    
     google.maps.event.addListener(drawingManager, 'polygoncomplete',  (polygon) => {
      const len = polygon.getPath().getLength();
      const polyArrayLatLng = [];
      

      for (let i = 0; i < len; i++) {
        const vertex = polygon.getPath().getAt(i);
        const vertexLatLng = [vertex.lat(),vertex.lng()];
        polyArrayLatLng.push(vertexLatLng);
      }
      // the last point of polygon should be always the same as the first point (math rule)
      polyArrayLatLng.push(polyArrayLatLng[0]);
      this.coordsval = polyArrayLatLng
      this.updatelatlong(this.coordsval);

      
      
    
      
       
     

       console.log('coordinates', polyArrayLatLng);
       
       

       
       

      
       return polyArrayLatLng; 


    
  });
 
  
  
  
  
    
  
  
  

  }
  public updatelatlong(coordsval){
    this.service.changeCoords(coordsval);
    console.log(coordsval);
  }

  drawPolygon() {
    const paths = [
        { lat: 12.3175489124641, lng: 78.48798591874993 },
        { lat: 8.210490392434776, lng: 77.38935310624993 },
        { lat: 10.59482777210473, lng: 79.58661873124993 }
      ]
    const polygon = new google.maps.Polygon({
      paths: paths,
      editable: true,
      draggable: true,
    })

    polygon.setMap(this.map)
  }
  
  


}