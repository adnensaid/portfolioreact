import React, { Component } from 'react';
import Style from './montre.module.scss';
export default class Montre extends Component{
  render(){
    const show = this.props.show ? "none" : "block"
    return(
      <div className={ Style.labsContent } style={{ display:show }} >
        <h1>Ma montre</h1> 
        <div className={ Style.window }>
          <div className={ Style.windowTitre } >
            <i></i>  
            <p>montre</p>
          </div>
          <div className={ Style.windowContent }>
            <div className={ Style.montreContent }>
              <i className={ Style.heures }>
              </i>    
              <i className={ Style.minutes }></i>
              <i className={ Style.secondes }></i>
              <div className={ Style.montreText }>
                <span>12</span>
                <span>3</span>
                <span>6</span>
                <span>9</span>
              </div>
            </div>
          </div> 
        </div>  
        <div className={ Style.reglage }>
          <div className={ Style.reglageHeader }>
            <span><i className={ Style.arrowClose }></i></span>
            <p className={ Style.reglageTitre }>Modifier l'heure</p>
            <span><i className={ Style.arrowValidate }></i></span>
          </div>  
          <div className={ Style.reglageContent }>
            <div className={ Style.heuresReglage }>
              <div className={ Style.circle+" "+Style.left }></div>
              <div className={ Style.circle+" "+Style.right }></div>
              <ul className={ Style.side }>
                <li><span>00</span></li> 
                <li><span>01</span></li>
                <li><span>02</span></li>
                <li><span>03</span></li>  
                <li><span>04</span></li>
                <li><span>05</span></li>
                <li><span>06</span></li>
                <li><span>07</span></li>
                <li><span>08</span></li>
                <li><span>09</span></li>
                <li><span>10</span></li>
                <li><span>11</span></li>
              </ul>
            </div>    
            <div className={ Style.minutesReglage }>
               <div className={ Style.circle+" "+Style.left }></div>
               <div className={ Style.circle+" "+Style.right }></div>
                <ul className={ Style.side }>
                  <li><span>00</span></li> 
                  <li><span>01</span></li>
                  <li><span>02</span></li>
                  <li><span>03</span></li>
                  <li><span>04</span></li>
                  <li><span>05</span></li>
                  <li><span>06</span></li>
                  <li><span>07</span></li>
                  <li><span>08</span></li>
                  <li><span>09</span></li>
                  <li><span>10</span></li>
                  <li><span>11</span></li>
                  <li><span>12</span></li>
                  <li><span>13</span></li>
                  <li><span>14</span></li>
                  <li><span>15</span></li>
                  <li><span>16</span></li>
                  <li><span>17</span></li>
                  <li><span>18</span></li>
                  <li><span>19</span></li>
                  <li><span>20</span></li>
                  <li><span>21</span></li>
                  <li><span>22</span></li>
                  <li><span>23</span></li>
                  <li><span>24</span></li>
                  <li><span>25</span></li>
                  <li><span>26</span></li>
                  <li><span>27</span></li>
                  <li><span>28</span></li>
                  <li><span>29</span></li>
                  <li><span>30</span></li>
                  <li><span>31</span></li>
                  <li><span>32</span></li>
                  <li><span>33</span></li>
                  <li><span>34</span></li>
                  <li><span>35</span></li>
                  <li><span>36</span></li>
                  <li><span>37</span></li>
                  <li><span>38</span></li>
                  <li><span>39</span></li>
                  <li><span>40</span></li>
                  <li><span>41</span></li>
                  <li><span>42</span></li>
                  <li><span>43</span></li>
                  <li><span>44</span></li>
                  <li><span>45</span></li>
                  <li><span>46</span></li>
                  <li><span>47</span></li>
                  <li><span>48</span></li>
                  <li><span>49</span></li>
                  <li><span>50</span></li>
                  <li><span>51</span></li>
                  <li><span>52</span></li>
                  <li><span>53</span></li>
                  <li><span>54</span></li>
                  <li><span>55</span></li>
                  <li><span>56</span></li>
                  <li><span>57</span></li>
                  <li><span>58</span></li>
                  <li><span>59</span></li>

                </ul>
            </div>
            <div className={ Style.filterTop }></div>
            <div className={ Style.filterBottom }></div>
          </div>
        </div>  
      </div>
    )
  }
}