import React from 'react'
import './Buttons.css'
//import { MenuItem, Dropdown } from 'react-bootstrap'


function enable(cns, enabled) { return enabled ? cns : cns + ' sl-button-disabled' }
function enableImg(cns, enabled) { return enabled ? cns : cns + ' sl-image-button-disabled' }

export const PassageAddButton = function({enabled, onClick, tooltip}) {
    return (
        <span className={enable('sl-fa-button sl-passage-add-button fa-plus-square-o', enabled)}
            onClick={() => onClick && onClick()}
            data-toggle="tooltip" 
            title={tooltip} >
        </span>
    )
}

export const MembersViewButton = function({tooltip, onClick}) {
    return (
        <span className="sl-fa-button sl-members-view-button fa-user"
            onClick={() => onClick && onClick()}
            data-toggle="tooltip" 
            title={tooltip} >
        </span>
    )
}

export const PortionsViewButton = function({tooltip, onClick}) {
    return (
        <span className="sl-fa-button sl-portions-view-button fa-bars"
            onClick={() => onClick && onClick()}
            data-toggle="tooltip" 
            title={tooltip} >
        </span>
    )
}

export const TourButton = function ({ tooltip, onClick }) {
    return (
        <span className="sl-fa-button fa-bus sl-tour-button"
            onClick={() => onClick && onClick()}
            data-toggle="tooltip"
            title={tooltip} >
        </span>
    )
}


export const RecordButton = function ({ enabled, onClick, className }) {
    //let className = classNames("et-right", "fa", "fa-2x", "fa-circle", "fa-fw", "text-danger", "video-up1", 
    let tooltip = "(Re)record passage. Click square Stop icon to end."
    if (!className) className = 'sl-record-button'

    return (
        <img className={enableImg(className, enabled)}
            alt={tooltip}
            src="toolbar/record.svg"
            onClick={() => enabled && onClick && onClick()}
            data-toggle="tooltip"
            title={tooltip}
        />
    )
}

export const StopButton = function({enabled, onClick}) {
    let tooltip = "Stop recording."

    return (
        <span className={enable('sl-fa-button sl-stop-button fa-stop', enabled)}
            onClick={() => enabled && onClick && onClick()}
            data-toggle="tooltip" 
            title={tooltip} >
        </span>
    )
}

export const PlayButton = function ({ enabled, onClick, className }) {
    let tooltip = "Play."
    if (!className) className = 'sl-play-button'

    return (
        <img className={enableImg(className, enabled)}
            alt={tooltip}
            src="toolbar/play.svg"
            onClick={() => enabled && onClick && onClick()}
            data-toggle="tooltip"
            title={tooltip}
        />
    )
}

export const PauseButton = function ({ enabled, onClick }) {
    let tooltip = "Pause."

    return (
        <img className={enableImg('sl-pause-button', enabled)}
            alt={tooltip}
            src="toolbar/pause.svg"
            onClick={() => enabled && onClick && onClick()}
            data-toggle="tooltip"
            title={tooltip}
        />
    )
}

//    color: ${props => props.enabled ? 'red' : 'lightgrey'};

export const CreateNoteButton = function ({ enabled, onClick }) {
    let tooltip = "Create note at current location."

    return (
        <span
            className={enable('sl-fa-button sl-create-note-button fa-comment', enabled)}
            onClick={() => enabled && onClick && onClick()}
            data-toggle="tooltip"
            title={tooltip} >
        </span>
    )
}

export const PlayTourStepButton = function ({ enabled, onClick }) {
    let tooltip = enabled ? "Click to play sign language explanation or drag and drop an .mp4 file to supply an explanation in your sign language."
        : "Drag and drop an .mp4 file here to supply an explanation in your sign language."

    return (
        <span
            className={enable('sl-fa-button sl-play-tour-step-button fa-sign-language', enabled)}
            onClick={() => enabled && onClick && onClick()}
            data-toggle="tooltip"
            title={tooltip} >
        </span>
    )
}


export const CreateSegmentButton = function ({ enabled, onClick }) {
    let tooltip = "Create segment in video at current location."

    return (
        <span>
            <span
                className={enable('sl-fa-button sl-create-segment-button fa-tag', enabled)}
                onClick={() => enabled && onClick && onClick()}
                data-toggle="tooltip"
                title={tooltip} >
            </span>
            {/* 
            ??? should we support a dropdown menu to select a segment?
            <Dropdown id="dropdown-select-segment">
                <Dropdown.Toggle bsStyle="default" />
                <Dropdown.Menu>
                    <MenuItem eventKey="1">Luke 15.11-24</MenuItem>
                    <MenuItem eventKey="2">Luke 15.25-31</MenuItem>
                </Dropdown.Menu>
            </Dropdown> */}
        </span>
    )
}

export const EditSegmentButton = function ({ enabled, onClick, tooltip, tourSelector, className }) {
    let className2 = `sl-fa-button sl-edit-segment-button fa-pencil-square-o ${className}`
    
    className2 = enable(className2, enabled)
    if (tourSelector && tourSelector.startsWith('.sl-edit-segment')) {
        className2 += ' sl-edit-segment-button-tour'
    }

    return (
        <span>
            <span
                className={className2}
                onClick={() => enabled && onClick && onClick()}
                data-toggle="tooltip"
                title={tooltip} >
            </span>
        </span>
    )
}

export const DictateSegmentButton = function ({ enabled, onClick, tooltip, tourSelector }) {
    let className = `sl-fa-button sl-edit-segment-button sl-dictate-segment-caption-button fa-microphone`

    let className2 = enable(className, enabled)
    if (tourSelector && tourSelector.startsWith('.sl-dictate-segment')) {
        className2 += ' sl-edit-segment-button-tour'
    }

    return (
        <span>
            <span
                className={className2}
                onClick={() => enabled && onClick && onClick()}
                data-toggle="tooltip"
                title={tooltip} >
            </span>
        </span>
    )
}

export const OkEditSegmentButton = function ({ enabled, onClick }) {
    let tooltip = "Save edits."

    return (
        <span>
            <span
                className={enable('sl-fa-button sl-ok-edit-segment-lables-button fa-check', enabled)}
                onClick={() => enabled && onClick && onClick()}
                data-toggle="tooltip"
                title={tooltip} >
            </span>
        </span>
    )
}

export const CancelEditSegmentButton = function ({ enabled, onClick }) {
    let tooltip = "Cancel edits."

    return (
        <span>
            <span
                className={enable('sl-fa-button sl-cancel-edit-segment-lables-button fa-times-circle-o', enabled)}
                onClick={() => enabled && onClick && onClick()}
                data-toggle="tooltip"
                title={tooltip} >
            </span>
        </span>
    )
}

export const DeleteSegmentButton = function ({ tooltip, enabled, onClick }) {
    return (
        <span>
            <span
                className={enable('sl-delete-segment-button fa-trash', enabled)}
                onClick={() => enabled && onClick && onClick()}
                data-toggle="tooltip"
                title={tooltip} >
            </span>
        </span>
    )
}

export const PreviousSegmentButton = function ({ tooltip, enabled, onClick }) {
    return (
        <span>
            <span
                className={enable('sl-fa-button sl-previous-segment-button fa-arrow-left', enabled)}
                onClick={() => enabled && onClick && onClick()}
                data-toggle="tooltip"
                title={tooltip} >
            </span>
        </span>
    )
}

export const NextSegmentButton = function ({ tooltip, enabled, onClick }) {
    return (
        <span>
            <span
                className={enable('sl-fa-button sl-next-segment-button fa-arrow-right', enabled)}
                onClick={() => enabled && onClick && onClick()}
                data-toggle="tooltip"
                title={tooltip} >
            </span>
        </span>
    )
}

export const AdjustCurrentTimeButtons = function ({ enabled, adjustCurrentTime }) {
    return (
        <span className="sl-adjust-current-time-buttons">
            <img className={enableImg('sl-adjust-current-time-button', enabled)}
                src="toolbar/1SecLeftButton.gif"
                onClick={() => adjustCurrentTime(-1.0)}
                alt="go back 1 second"
                title="Go back 1 second" />

            <img className={enableImg('sl-adjust-current-time-button', enabled)}
                src="toolbar/PreviousButton.gif"
                onClick={() => adjustCurrentTime(-2.0/30.0)}
                alt="go back 1 frame"
                title="Go back 1 frame" />

            <img className={enableImg('sl-adjust-current-time-button', enabled)}
                src="toolbar/NextButton.gif"
                onClick={() => adjustCurrentTime(2.0/30.0)}
                alt="forward 1 frame"
                title="Go forward 1 frame" />

            <img className={enableImg('sl-adjust-current-time-button', enabled)}
                src="toolbar/1SecRightButton.gif"
                onClick={() => adjustCurrentTime(1.0)}
                alt="go forward 1 second"
                title="Go forward 1 second" />
        </span>
    )
}
