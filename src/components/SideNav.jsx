import React from 'react';
import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';

const styles = {
  width: 240,
  height: '100%',
  display: 'inline-table',
  marginRight: 10
};
const SideNav = ({...navProps}) => {

  const [activeKey, setActiveKey] = React.useState('1');
  const [openKeys, setOpenKeys] = React.useState(['3', '4']);
  const [expanded, setExpand] = React.useState(true);
  const onExpand = ()=>{
    setExpand(!expanded)
  }
  return (
    <div style={styles}>
      <Sidenav
        appearance="inverse"
        expanded={expanded}
        openKeys={openKeys}
        activeKey={activeKey}
        onOpenChange={setOpenKeys}
        onExpand={setExpand}
      >
        <Sidenav.Body>
          <Nav {...navProps}>
            <Nav.Item eventKey="1" icon={<DashboardIcon />}>
              Dashboard
            </Nav.Item>
            <Nav.Menu eventKey="4" title="Districts" icon={<GearCircleIcon />}>
              <Nav.Item eventKey="4-1">Jinja</Nav.Item>
              <Nav.Item eventKey="4-2">Bugiri</Nav.Item>
              <Nav.Item eventKey="4-3">Iganga</Nav.Item>
               <Nav.Item eventKey="4-4">Mukono</Nav.Item>
              <Nav.Item eventKey="4-5">Luwero</Nav.Item>
              <Nav.Item eventKey="4-6">Nakaseke</Nav.Item>
               <Nav.Item eventKey="4-7">Nakasongola</Nav.Item>
              <Nav.Item eventKey="4-8">Buike</Nav.Item>
              <Nav.Item eventKey="4-10">Kamuli</Nav.Item>
              <Nav.Item eventKey="4-11">Kayunga</Nav.Item>
              <Nav.Item eventKey="4-12">Kamwenge</Nav.Item>
              <Nav.Item eventKey="4-13">Lamwo</Nav.Item>
              <Nav.Item eventKey="4-14">Luuka</Nav.Item>
              <Nav.Item eventKey="4-15">Bugweri</Nav.Item>
              <Nav.Item eventKey="4-16">Mubende</Nav.Item>
              <Nav.Item eventKey="4-17">Wakiso</Nav.Item>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle onToggle={onExpand} />
      </Sidenav>
    </div>
  )
}

export default SideNav
