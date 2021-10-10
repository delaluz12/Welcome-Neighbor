//template for welcoming admin account sign-up
const adminTemplate = `
    <div style="font-family: inherit; text-align: center; background-color:#4D5171; line-height:80px;">
        <span style="color: #ffffff; font-size: 48px; font-family: inherit">Welcome Neighbor!</span>
    </div>
    <div style="font-family: inherit; text-align: center;background-color:#4D5171; line-height:80px;;">
        <span style="color: #ffc94c; font-size: 20px; font-family: inherit">
            <strong>"It's a beautiful day in the neighborhood"-Mr. Rogers</strong></span>
    </div>
    <div style="font-family: inherit; text-align: center; background-color:#4D5171; line-height:80px">
        <span style="color: #ffffff; font-size: 20px">We Thank you for creating a new neighborhood and showing your support!</span>
    </div>
    <div style="background-color:#4D5171;">
        <img class="max-width" border="0" 
            style="display:block; margin:auto; background-color:#ffffff; color:#000000; text-decoration:none; 
                font-family:Helvetica, arial, sans-serif; font-size:16px; width:400px !important; width:100%; height:auto !important;" width="265" 
            alt="" data-proportionally-constrained="true" data-responsive="true" 
            src="http://cdn.mcauto-images-production.sendgrid.net/e070a61266037e4e/c12a2078-7a1e-4a58-9379-249fbf97a392/200x200.png">
    </div>
    <div style="font-family: inherit; text-align: center; background-color:#4D5171; line-height:80px;">
        <span style="color: #ffc94c; font-size: 20px"><strong>Sincerely,&nbsp;</strong></span>
    </div>
    <div style="font-family: inherit; text-align: center;background-color:#4D5171; line-height:80px">
        <span style="color: #ffc94c; font-size: 20px"><strong>~Git Down Crew&nbsp;</strong></span>
    </div>
    <div style="font-family: inherit; text-align: center"><br></div>
        <p style="font-size:12px; line-height:20px;">
            <a class="Unsubscribe--unsubscribeLink" href="{{{unsubscribe}}}" target="_blank" style="font-family:sans-serif;text-decoration:none;">
            Unsubscribe
            </a>
            -
            <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
            </td>
            <a href="{{{unsubscribe_preferences}}}" target="_blank" class="Unsubscribe--unsubscribePreferences" style="font-family:sans-serif;text-decoration:none;">
            Unsubscribe Preferences
            </a>
        </p>
    </div>`;



module.exports = adminTemplate;
