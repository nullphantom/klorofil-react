import React, { Component } from 'react'

class Sidebar extends Component {
    render() {
        return(
		<div id="sidebar-nav" class="sidebar">
			<div class="sidebar-scroll">
				<nav>
					<ul class="nav">
						<li><a href="index.html" class="active"><i class="lnr lnr-home"></i> <span>Dashboard</span></a></li>
						<li><a href="elements.html" class=""><i class="lnr lnr-chart-bars"></i> <span>Siswa</span></a></li>
						<li><a href="charts.html" class=""><i class="lnr lnr-code"></i> <span>Trainer</span></a></li>
						<li><a href="panels.html" class=""><i class="lnr lnr-pencil"></i> <span>Matakursus</span></a></li>
						<li><a href="notifications.html" class=""><i class="lnr lnr-dice"></i> <span>Kelas</span></a></li>
						<li>
							<a href="#subPages" data-toggle="collapse" class="collapsed"><i class="lnr lnr-map"></i> <span>Keuangan</span> <i class="icon-submenu lnr lnr-chevron-left"></i></a>
							<div id="subPages" class="collapse ">
								<ul class="nav">
									<li><a href="page-profile.html" class="">Pemasukan</a></li>
									<li><a href="page-login.html" class="">Pengeluaran</a></li>
									<li><a href="page-lockscreen.html" class="">Laporan</a></li>
								</ul>
							</div>
						</li>
						<li><a href="tables.html" class=""><i class="lnr lnr-alarm"></i> <span>Jadwal</span></a></li>
						<li><a href="typography.html" class=""><i class="lnr lnr-text-format"></i> <span>Ruangan</span></a></li>
						<li><a href="icons.html" class=""><i class="lnr lnr-linearicons"></i> <span>Icons</span></a></li>
					</ul>
				</nav>
			</div>
		</div>
        )
    }
}

export default Sidebar