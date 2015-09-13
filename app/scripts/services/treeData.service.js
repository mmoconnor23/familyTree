'use strict';

function TreeData() {
	var familyData = {
		MelissaMattingly: {
			parents: [
				'BrianFrancis',
				'DebbiAnn'
			],
			siblings: [
				'KyleEdward'
			],
			children: [],
			spouses: [],
			self: {
				name: 'Melissa Mattingly O\'Connor',
				gender: 'F', 
				birthday: new Date( 1992, 2, 24 )
			}
		},
		KyleEdward: {
			parents: [
				'BrianFrancis',
				'DebbiAnn'
			],
			siblings: [
				'MelissaMattingly'
			],
			children: [],
			spouses: [],
			self: {
				name: 'Kyle Edward O\'Connor',
				gender: 'M', 
				birthday: new Date( 1996, 5, 2 )
			}
		},
		DebbiAnn: {
			parents: [
				'MarieK',
				'JosephK'
			],
			siblings: [
				'TonyK',
				'MarkK',
				'KathiT',
				'TerriJ',
				'JayK'
			],
			children: [
				'MelissaMattingly',
				'KyleEdward'
			],
			spouses: [
				'BrianFrancis'
			],
			self: {
				name: 'Debbi Ann O\'Connor',
				gender: 'F', 
				birthday: new Date( 1958, 3, 7 )
			}
		},
		BrianFrancis: {
			parents: [
				'BarbaraO',
				'EdwardO'
			],
			siblings: [
				'CarolynO',
				'RobO',
				'EileenO',
				'DennisO'
			],
			children: [
				'MelissaMattingly',
				'KyleEdward'
			],
			spouses: [
				'DebbiAnn'
			],
			self: {
				name: 'Brian Francis O\'Connor',
				gender: 'M', 
				birthday: new Date( 1956, 8, 10 )
			}
		}
	};

	function getFamilyData() {
		return familyData;
	}

	return {
		getFamilyData: getFamilyData
	};
}

angular.module( 'familyTreeApp' )
	   .service( 'treeData', TreeData );