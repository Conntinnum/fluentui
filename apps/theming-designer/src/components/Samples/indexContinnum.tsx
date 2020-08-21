import * as React from 'react';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { DefaultButton, PrimaryButton, IconButton } from 'office-ui-fabric-react/lib/Button';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { MainPanelInnerContent, MainPanelNumericalWidth } from '../../shared/MainPanelStyles';
import { mergeStyles } from '@uifabric/merge-styles/lib/mergeStyles';
import { Persona, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { Slider } from 'office-ui-fabric-react/lib/Slider';
import { Stack, IStackStyles } from 'office-ui-fabric-react/lib/Stack';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { IRating, RatingBase, Rating, RatingSize } from 'office-ui-fabric-react/lib/components/Rating';
import { DatePicker, IDatePickerStrings } from 'office-ui-fabric-react/lib/components/DatePicker';
import {
  Coachmark,
  DirectionalHint,
  TeachingBubbleContent,
  IDropdownOption,
  IButtonProps,
  mergeStyleSets,
} from 'office-ui-fabric-react';
import { useBoolean } from '@uifabric/react-hooks';
import { FocusTrapZone } from 'office-ui-fabric-react/lib/FocusTrapZone';
import { Card, ICardTokens, ICardSectionStyles, ICardSectionTokens } from '@uifabric/react-cards';

/* eslint-disable no-console */

const classNames = mergeStyleSets({
  dropdownContainer: {
    maxWidth: '400px',
  },
  buttonContainer: {
    marginTop: '30px',
    display: 'inline-block',
  },
});

const buttonProps: IButtonProps = {
  text: 'Try it',
};

const buttonProps2: IButtonProps = {
  text: 'Try it again',
};

export const CoachmarkBasicExample: React.FunctionComponent = () => {
  const targetButton = React.useRef<HTMLDivElement>(null);
  const [isCoachmarkVisible, { setFalse: hideCoachmark, setTrue: showCoachmark }] = useBoolean(false);
  const [coachmarkPosition, setCoachmarkPosition] = React.useState<DirectionalHint>(DirectionalHint.bottomAutoEdge);

  const positioningContainerProps = React.useMemo(
    () => ({
      directionalHint: coachmarkPosition,
      doNotLayer: false,
    }),
    [coachmarkPosition],
  );

  return (
    <>
      <div className={classNames.buttonContainer} ref={targetButton}>
        <DefaultButton onClick={showCoachmark} text={isCoachmarkVisible ? 'Hide coachmark' : 'Show coachmark'} />
      </div>
      {isCoachmarkVisible && (
        <Coachmark
          target={targetButton.current}
          positioningContainerProps={positioningContainerProps}
          ariaAlertText="A coachmark has appeared"
          ariaDescribedBy="coachmark-desc1"
          ariaLabelledBy="coachmark-label1"
          ariaDescribedByText="Press enter or alt + C to open the coachmark notification"
          ariaLabelledByText="Coachmark notification"
        >
          <TeachingBubbleContent
            headline="Example title"
            hasCloseButton
            closeButtonAriaLabel="Close"
            primaryButtonProps={buttonProps}
            secondaryButtonProps={buttonProps2}
            onDismiss={hideCoachmark}
            ariaDescribedBy="example-description1"
            ariaLabelledBy="example-label1"
          >
            Welcome to the land of coachmarks!
          </TeachingBubbleContent>
        </Coachmark>
      )}
    </>
  );
};

export interface ISamplesProps {
  backgroundColor: string;
  textColor: string;
  primaryColor: string;
  font: string;
}

export interface ISamplesState {
  error: boolean;
  disabled: boolean;
  checked: boolean;
  readonly: boolean;
  noResource: boolean;
}

const columnSpace = 48;
const columns = 3;
const sampleColumn = mergeStyles({
  width: (MainPanelNumericalWidth - columnSpace * (columns - 1)) / columns,
});
const iconButtonStyles = mergeStyles({
  color: '#0078D4',
});

const commandBarItems = [
  {
    key: 'newItem',
    name: 'New',
    cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
    iconProps: {
      iconName: 'Add',
    },
    ariaLabel: 'New',
    subMenuProps: {
      items: [
        {
          key: 'emailMessage',
          name: 'Email message',
          iconProps: {
            iconName: 'Mail',
          },
          ['data-automation-id']: 'newEmailButton',
        },
        {
          key: 'calendarEvent',
          name: 'Calendar event',
          iconProps: {
            iconName: 'Calendar',
          },
        },
      ],
    },
  },
  {
    key: 'upload',
    name: 'Upload',
    iconProps: {
      iconName: 'Upload',
    },
    href: 'https://developer.microsoft.com/en-us/fluentui',
    ['data-automation-id']: 'uploadButton',
  },
  {
    key: 'share',
    name: 'Share',
    iconProps: {
      iconName: 'Share',
    },
    onClick: () => console.log('Share'),
  },
  {
    key: 'download',
    name: 'Download',
    iconProps: {
      iconName: 'Download',
    },
    onClick: () => console.log('Download'),
  },
  {
    key: 'more',
    name: 'More',
    iconProps: {
      iconName: 'More',
    },
    onClick: () => console.log('More'),
  },
];

const commandBarFarItems = [
  {
    key: 'search',
    ariaLabel: 'Search',
    iconProps: {
      iconName: 'Search',
    },
    onClick: () => console.log('Search'),
  },
  {
    key: 'filter',
    name: 'Filter',
    ariaLabel: 'Filter',
    iconProps: {
      iconName: 'Filter',
    },
    iconOnly: true,
    onClick: () => console.log('Filter'),
  },
  {
    key: 'list',
    name: 'List',
    ariaLabel: 'List',
    iconProps: {
      iconName: 'List',
    },
    iconOnly: true,
    onClick: () => console.log('List'),
  },
];

const options3: IChoiceGroupOption[] = [
  { key: 'day', text: 'Day', iconProps: { iconName: 'CalendarDay' }, disabled: false },
  { key: 'week', text: 'Week', iconProps: { iconName: 'CalendarWeek' }, disabled: false },
  { key: 'month', text: 'Month', iconProps: { iconName: 'Calendar' }, disabled: false },
];

const DayPickerStrings: IDatePickerStrings = {
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],

  shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

  shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],

  goToToday: 'Go to today',
  prevMonthAriaLabel: 'Go to previous month',
  nextMonthAriaLabel: 'Go to next month',
  prevYearAriaLabel: 'Go to previous year',
  nextYearAriaLabel: 'Go to next year',
  closeButtonAriaLabel: 'Close date picker',
};

const RatingBasicExample2: React.FunctionComponent = () => {
  //REF Object
  const ratingRef = React.useRef<IRating>(null);

  //STATE VARIABLES
  const [rating, setRating] = React.useState<number>(0);

  const onClickEvent = (ev: React.MouseEvent<HTMLElement>): void => {
    if (ratingRef.current !== null) {
      let component: RatingBase = ratingRef.current as RatingBase;
      let newRating = component.state.rating as number;
      setRating(
        newRating === rating //if same than current
          ? 0 // update to 0
          : newRating,
      ); // else update to new value
    }
  };

  return (
    <div>
      Puntuación:
      <Rating
        componentRef={ratingRef}
        min={0}
        max={5}
        size={RatingSize.Large}
        rating={rating}
        allowZeroStars={true}
        onClick={onClickEvent}
        icon="Dislike"
        unselectedIcon="LikeSolid"
      />
    </div>
  );
};

export class Samples extends React.Component<ISamplesProps, ISamplesState> {
  disabled: any;
  constructor(props: ISamplesProps) {
    super(props);
    this.state = {
      error: true,
      disabled: false,
      checked: false,
      readonly: false,
      noResource: false,
    };
    // this._onToggleChange = this._onToggleChange.bind(this);
  }

  public render() {
    const { error, disabled, checked, readonly, noResource } = this.state;
    const trapZoneStackStyles: Partial<IStackStyles> = {
      root: { border: '2px dashed #ababab', padding: 10 },
    };

    const stackStyles: Partial<IStackStyles> = {
      root: { fontFamily: this.props.font, color: this.props.textColor },
    };

    return (
      <div style={{ backgroundColor: this.props.backgroundColor }}>
        <div className={MainPanelInnerContent}>
          <Stack gap={32}>
            <CommandBar farItems={commandBarFarItems} items={commandBarItems} />
            <Stack horizontal gap={columnSpace}>
              <Stack.Item className={sampleColumn} grow={1}>
                <Stack gap={32}>
                  <Stack gap={20}>
                    <Text variant="small" styles={{ root: { color: this.props.textColor } }}>
                      STORIES
                    </Text>
                    <Text variant="xxLarge" styles={stackStyles}>
                      CONTINNUM THEME DESIGNER
                    </Text>
                    <Text variant="medium" styles={{ root: { color: this.props.textColor } }}>
                      Make a big impression with this clean, modern, and mobile-friendly site. Use it to communicate
                      information to people inside or outisde your team. Share your ideas, results, and more in this
                      visually compelling format.
                    </Text>
                    <Link disabled={disabled}>
                      Learn more <Icon iconName="ChevronRight" />
                    </Link>
                  </Stack>
                  <Persona
                    text="Cameron Evans"
                    secondaryText="Senior Researcher at Contoso"
                    presence={PersonaPresence.online}
                    initialsColor={this.props.primaryColor}
                  />
                </Stack>
              </Stack.Item>
              <Stack.Item className={sampleColumn} grow={1}>
                <Stack gap={32}>
                  <Dropdown
                    selectedKey="content"
                    label="Select one"
                    options={[
                      { key: 'content', text: 'Content' },
                      { key: 'morecontent', text: 'More content' },
                    ]}
                    disabled={disabled}
                  />
                  <TextField
                    label="Correo Electronico"
                    required={false}
                    placeholder="Ejemplo: Info@Continnum.com.ar"
                    iconProps={{ iconName: 'Calendar' }}
                    errorMessage={error ? 'Mensaje de error' : ''}
                    // readOnly={readonly}
                    disabled={disabled}
                    description="Para más información realice Click en el Icono!"
                  />
                  <Stack horizontal gap={20}>
                    <Stack gap={13} grow={1}>
                      <div />
                      <Checkbox disabled={disabled} label="Option 1" />
                      <Checkbox disabled={disabled} label="Option 2" defaultChecked />
                      <Checkbox disabled={disabled} label="Option 3" defaultChecked />
                    </Stack>
                    <Stack gap={10} grow={1}>
                      <ChoiceGroup
                        defaultSelectedKey="A"
                        options={[
                          {
                            key: 'A',
                            text: 'Option 1',
                          } as IChoiceGroupOption,
                          {
                            key: 'B',
                            text: 'Option 2',
                          },
                          {
                            key: 'C',
                            text: 'Option 3',
                          },
                        ]}
                        disabled={disabled}
                      />
                    </Stack>
                  </Stack>
                  <Stack gap={10} grow={1}>
                    <RatingBasicExample2 />
                    <CoachmarkBasicExample>aa</CoachmarkBasicExample>
                  </Stack>
                </Stack>
              </Stack.Item>
              <Stack.Item className={sampleColumn} grow={1}>
                <Stack gap={32}>
                  <Slider disabled={disabled} max={11} />
                  <Card aria-label="Clickable horizontal card">
                    <Card.Item>
                      <Toggle
                        onText="On"
                        offText="Off"
                        inlineLabel
                        label="Toggle for disabled states"
                        onChange={this._onDisable}
                      />
                      <Toggle
                        onText="On"
                        offText="Off"
                        inlineLabel
                        label="No resource Available"
                        onChange={this._onNoResource}
                      />
                      <Toggle onText="On" offText="Off" inlineLabel label="Error" onChange={this._onError} />
                      <Toggle onText="On" offText="Off" inlineLabel label="Redonly" onChange={this._onRedonly} />
                      <Toggle onText="On" offText="Off" inlineLabel label="Checked" onChange={this._onChecked} />
                    </Card.Item>
                  </Card>
                  <Pivot>
                    <PivotItem headerText="Home" />
                    <PivotItem headerText="Pages" />
                    <PivotItem headerText="Documents" />
                    <PivotItem headerText="Activity" />
                  </Pivot>
                  <Stack horizontal gap={15}>
                    <IconButton disabled={disabled} iconProps={{ iconName: 'Like' }} className={iconButtonStyles} />
                    <IconButton
                      disabled={disabled}
                      iconProps={{ iconName: 'SingleBookmark' }}
                      className={iconButtonStyles}
                    />
                    <IconButton disabled={disabled} iconProps={{ iconName: 'Sunny' }} className={iconButtonStyles} />
                  </Stack>
                  <Stack horizontal gap={20}>
                    <ChoiceGroup
                      label="Pick one icon"
                      defaultSelectedKey="day"
                      options={options3}
                      disabled={disabled}
                    />
                  </Stack>
                  <Stack horizontal gap={20}>
                    <DatePicker
                      label="Fecha de Nacimiento                 "
                      strings={DayPickerStrings}
                      placeholder="Seleccione una Fecha"
                      ariaLabel=""
                      disabled={disabled}
                    />
                  </Stack>

                  <Stack horizontal={true} styles={trapZoneStackStyles}>
                    <PrimaryButton disabled={disabled} text="Primary button" />
                    <DefaultButton disabled={disabled} text="Default button" />
                  </Stack>
                </Stack>
              </Stack.Item>
            </Stack>
          </Stack>
        </div>
      </div>
    );
  }

  private _onDisable() {
    this.setState({
      disabled: !this.state.disabled,
    });
  }

  private _onNoResource() {
    this.setState({
      noResource: !this.state.noResource,
    });
  }

  private _onRedonly() {
    this.setState({
      readonly: !this.state.readonly,
    });
  }

  private _onChecked() {
    this.setState({
      checked: !this.state.checked,
    });
  }

  private _onError() {
    this.setState({
      error: !this.state.error,
    });
  }
}
